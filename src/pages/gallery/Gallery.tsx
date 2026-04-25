import GalleryHorizontal from "@/assets/icons/gallery-horizontal.svg?react";
import { MinimalNavbar } from "@/components/minimal-navbar/MinimalNavbar";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { useEffect, useRef } from "react";
import SplitType from "split-type";
import styles from "./Gallery.module.scss";

const ITEMS = [
  "Chromatic Loopscape",
  "Solar Bloom",
  "Neon Handscape",
  "Echo Discs",
  "Void Gaze",
  "Gravity Sync",
  "Heat Core",
  "Fractal Mirage",
  "Nova Pulse",
  "Sonic Horizon",
  "Dream Circuit",
  "Lunar Mesh",
  "Radiant Dusk",
  "Pixel Drift",
  "Vortex Bloom",
  "Shadow Static",
  "Crimson Phase",
  "Retro Cascade",
  "Photon Fold",
  "Zenith Flow",
];

const IMAGE_URLS = [
  "https://cdn.cosmos.so/0f164449-f65e-4584-9d62-a9b3e1f4a90a?format=jpeg",
  "https://cdn.cosmos.so/74ccf6cc-7672-4deb-ba13-1727b7dc6146?format=jpeg",
  "https://cdn.cosmos.so/2f49a117-05e7-4ae9-9e95-b9917f970adb?format=jpeg",
  "https://cdn.cosmos.so/7b5340f5-b4dc-4c08-8495-c507fa81480b?format=jpeg",
  "https://cdn.cosmos.so/f733585a-081e-48e7-a30e-e636446f2168?format=jpeg",
  "https://cdn.cosmos.so/47caf8a0-f456-41c5-98ea-6d0476315731?format=jpeg",
  "https://cdn.cosmos.so/f99f8445-6a19-4a9a-9de3-ac382acc1a3f?format=jpeg",
];

const COLUMNS = 4;

const SETTINGS = {
  baseWidth: 400,
  smallHeight: 330,
  largeHeight: 500,
  itemGap: 65,
  expandedScale: 0.4,
  dragEase: 0.075,
  momentumFactor: 200,
  bufferZone: 3,
  overlayOpacity: 0.9,
  overlayEaseDuration: 0.8,
  zoomDuration: 0.6,
} as const;

export const Gallery = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const projectTitleRef = useRef<HTMLParagraphElement>(null);
  const dragHintRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      !containerRef.current ||
      !canvasRef.current ||
      !overlayRef.current ||
      !projectTitleRef.current
    )
      return;

    const container = containerRef.current as HTMLDivElement;
    const canvas = canvasRef.current as HTMLDivElement;
    const overlay = overlayRef.current as HTMLDivElement;
    const projectTitleElement = projectTitleRef.current as HTMLParagraphElement;
    const dragHint = dragHintRef.current;

    gsap.registerPlugin(CustomEase);
    CustomEase.create("hop", "0.9, 0, 0.1, 1");

    const itemSizes = [
      { width: SETTINGS.baseWidth, height: SETTINGS.smallHeight },
      { width: SETTINGS.baseWidth, height: SETTINGS.largeHeight },
    ];
    const cellWidth = SETTINGS.baseWidth + SETTINGS.itemGap;
    const cellHeight =
      Math.max(SETTINGS.smallHeight, SETTINGS.largeHeight) + SETTINGS.itemGap;
    const itemCount = ITEMS.length;

    let isDragging = false;
    let startX = 0;
    let startY = 0;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let dragVelocityX = 0;
    let dragVelocityY = 0;
    let lastDragTime = 0;
    let mouseHasMoved = false;
    const visibleItems = new Set<string>();
    let lastUpdateTime = 0;
    let lastX = 0;
    let lastY = 0;
    let isExpanded = false;
    let activeItem: HTMLElement | null = null;
    let activeItemId: string | null = null;
    let canDrag = true;
    let originalPosition: {
      rect: DOMRect;
      imgSrc: string;
      width: number;
      height: number;
      nameText: string;
      numberText: string;
    } | null = null;
    let expandedItem: HTMLElement | null = null;
    let overlayAnimation: gsap.core.Tween | null = null;
    let titleSplit: SplitType | null = null;
    let animFrameId = 0;
    let hintHidden = false;

    function getItemId(col: number, row: number): string {
      return `${col},${row}`;
    }

    function getItemSize(row: number, col: number) {
      const sizeIndex = Math.abs((row * COLUMNS + col) % itemSizes.length);
      return itemSizes[sizeIndex];
    }

    function getItemPosition(col: number, row: number) {
      return { x: col * cellWidth, y: row * cellHeight };
    }

    function hideDragHint() {
      if (!hintHidden && dragHint) {
        hintHidden = true;
        gsap.to(dragHint, {
          opacity: 0,
          duration: 0.4,
          ease: "power2.out",
          onComplete: () => {
            dragHint.style.display = "none";
          },
        });
      }
    }

    function setAndAnimateTitle(title: string) {
      if (titleSplit) titleSplit.revert();
      projectTitleElement.textContent = title;
      titleSplit = new SplitType(projectTitleElement, { types: "words" });
      if (titleSplit.words) gsap.set(titleSplit.words, { y: "100%" });
    }

    function animateTitleIn() {
      if (!titleSplit?.words) return;
      gsap.fromTo(
        titleSplit.words,
        { y: "100%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 1, stagger: 0.1, ease: "power3.out" },
      );
    }

    function animateTitleOut() {
      if (!titleSplit?.words) return;
      gsap.to(titleSplit.words, {
        y: "-100%",
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
      });
    }

    function animateOverlayIn() {
      if (overlayAnimation) overlayAnimation.kill();
      overlayAnimation = gsap.to(overlay, {
        opacity: SETTINGS.overlayOpacity,
        duration: SETTINGS.overlayEaseDuration,
        ease: "power2.inOut",
        overwrite: true,
      });
    }

    function animateOverlayOut() {
      if (overlayAnimation) overlayAnimation.kill();
      overlayAnimation = gsap.to(overlay, {
        opacity: 0,
        duration: SETTINGS.overlayEaseDuration,
        ease: "power2.inOut",
      });
    }

    function updateVisibleItems() {
      const buffer = SETTINGS.bufferZone;
      const viewWidth = window.innerWidth * (1 + buffer);
      const viewHeight = window.innerHeight * (1 + buffer);
      const startCol = Math.floor((-currentX - viewWidth / 2) / cellWidth);
      const endCol = Math.ceil((-currentX + viewWidth * 1.5) / cellWidth);
      const startRow = Math.floor((-currentY - viewHeight / 2) / cellHeight);
      const endRow = Math.ceil((-currentY + viewHeight * 1.5) / cellHeight);

      const currentItems = new Set<string>();

      for (let row = startRow; row <= endRow; row++) {
        for (let col = startCol; col <= endCol; col++) {
          const itemId = getItemId(col, row);
          currentItems.add(itemId);
          if (visibleItems.has(itemId)) continue;
          if (activeItemId === itemId && isExpanded) continue;

          const itemSize = getItemSize(row, col);
          const position = getItemPosition(col, row);

          const item = document.createElement("div");
          item.className = "gallery-item";
          item.id = `gi-${itemId}`;
          item.style.width = `${itemSize.width}px`;
          item.style.height = `${itemSize.height}px`;
          item.style.left = `${position.x}px`;
          item.style.top = `${position.y}px`;
          item.dataset.col = String(col);
          item.dataset.row = String(row);
          item.dataset.width = String(itemSize.width);
          item.dataset.height = String(itemSize.height);

          const itemNum = Math.abs((row * COLUMNS + col) % itemCount);

          const imageContainer = document.createElement("div");
          imageContainer.className = "gallery-item-image-container";
          const img = document.createElement("img");
          img.src = IMAGE_URLS[itemNum % IMAGE_URLS.length];
          img.alt = ITEMS[itemNum];
          img.draggable = false;
          imageContainer.appendChild(img);
          item.appendChild(imageContainer);

          const captionElement = document.createElement("div");
          captionElement.className = "gallery-item-caption";
          const nameElement = document.createElement("div");
          nameElement.className = "gallery-item-name";
          nameElement.textContent = ITEMS[itemNum];
          captionElement.appendChild(nameElement);
          const numberElement = document.createElement("div");
          numberElement.className = "gallery-item-number";
          numberElement.textContent = `#${(itemNum + 1).toString().padStart(5, "0")}`;
          captionElement.appendChild(numberElement);
          item.appendChild(captionElement);

          item.addEventListener("click", () => {
            if (mouseHasMoved || isDragging) return;
            hideDragHint();
            handleItemClick(item, itemNum);
          });

          canvas.appendChild(item);
          visibleItems.add(itemId);
        }
      }

      visibleItems.forEach((itemId) => {
        if (
          !currentItems.has(itemId) ||
          (activeItemId === itemId && isExpanded)
        ) {
          const item = document.getElementById(`gi-${itemId}`);
          if (item && item.parentNode === canvas) canvas.removeChild(item);
          visibleItems.delete(itemId);
        }
      });
    }

    function handleItemClick(item: HTMLElement, itemIndex: number) {
      if (isExpanded) {
        if (expandedItem) closeExpandedItem();
      } else {
        expandItem(item, itemIndex);
      }
    }

    function expandItem(item: HTMLElement, itemIndex: number) {
      isExpanded = true;
      activeItem = item;
      activeItemId = item.id.replace("gi-", "");
      canDrag = false;
      container.style.cursor = "auto";

      const imgSrc = (item.querySelector("img") as HTMLImageElement).src;
      const titleIndex = itemIndex % ITEMS.length;
      const itemWidth = parseInt(item.dataset.width!);
      const itemHeight = parseInt(item.dataset.height!);

      setAndAnimateTitle(ITEMS[titleIndex]);

      const nameElement = item.querySelector(
        ".gallery-item-name",
      ) as HTMLElement;
      const numberElement = item.querySelector(
        ".gallery-item-number",
      ) as HTMLElement;
      const nameText = nameElement.textContent ?? "";
      const numberText = numberElement.textContent ?? "";

      const captionEl = item.querySelector(
        ".gallery-item-caption",
      ) as HTMLElement;
      const captionClone = captionEl.cloneNode(true) as HTMLElement;
      captionClone.classList.add("gallery-caption-clone");

      const nameClone = captionClone.querySelector(
        ".gallery-item-name",
      ) as HTMLElement;
      const numberClone = captionClone.querySelector(
        ".gallery-item-number",
      ) as HTMLElement;
      const nameCloneSplit = new SplitType(nameClone, { types: "words" });
      const numberCloneSplit = new SplitType(numberClone, { types: "words" });

      const captionRect = captionEl.getBoundingClientRect();
      captionClone.style.left = `${captionRect.left}px`;
      captionClone.style.bottom = `${window.innerHeight - captionRect.bottom}px`;
      captionClone.style.width = `${captionRect.width}px`;
      captionClone.style.zIndex = "10002";
      document.body.appendChild(captionClone);

      captionEl.style.opacity = "0";

      if (nameCloneSplit.words) {
        gsap.to(nameCloneSplit.words, {
          y: "100%",
          opacity: 0,
          duration: 0.6,
          stagger: 0.03,
          ease: "power3.in",
        });
      }
      if (numberCloneSplit.words) {
        gsap.to(numberCloneSplit.words, {
          y: "100%",
          opacity: 0,
          duration: 0.6,
          stagger: 0.02,
          delay: 0.05,
          ease: "power3.in",
          onComplete: () => {
            if (captionClone.parentNode)
              document.body.removeChild(captionClone);
          },
        });
      }

      const rect = item.getBoundingClientRect();
      originalPosition = {
        rect,
        imgSrc,
        width: itemWidth,
        height: itemHeight,
        nameText,
        numberText,
      };

      overlay.classList.add("gallery-overlay-active");
      animateOverlayIn();

      expandedItem = document.createElement("div");
      expandedItem.className = "gallery-expanded-item";
      expandedItem.style.width = `${itemWidth}px`;
      expandedItem.style.height = `${itemHeight}px`;
      expandedItem.style.zIndex = "10000";

      const img = document.createElement("img");
      img.src = imgSrc;
      expandedItem.appendChild(img);
      expandedItem.addEventListener("click", closeExpandedItem);
      document.body.appendChild(expandedItem);

      document.querySelectorAll(".gallery-item").forEach((el) => {
        if (el !== activeItem) {
          gsap.to(el, {
            opacity: 0,
            duration: SETTINGS.overlayEaseDuration,
            ease: "power2.inOut",
          });
        }
      });

      const targetWidth = window.innerWidth * SETTINGS.expandedScale;
      const aspectRatio = itemHeight / itemWidth;
      const targetHeight = targetWidth * aspectRatio;

      gsap.delayedCall(0.5, animateTitleIn);
      gsap.fromTo(
        expandedItem,
        {
          width: itemWidth,
          height: itemHeight,
          x: rect.left + itemWidth / 2 - window.innerWidth / 2,
          y: rect.top + itemHeight / 2 - window.innerHeight / 2,
        },
        {
          width: targetWidth,
          height: targetHeight,
          x: 0,
          y: 0,
          duration: SETTINGS.zoomDuration,
          ease: "hop",
        },
      );
    }

    function closeExpandedItem() {
      if (!expandedItem || !originalPosition) return;

      animateTitleOut();
      animateOverlayOut();

      document.querySelectorAll(".gallery-item").forEach((el) => {
        if (el.id !== `gi-${activeItemId}`) {
          gsap.to(el, {
            opacity: 1,
            duration: SETTINGS.overlayEaseDuration,
            delay: 0.3,
            ease: "power2.inOut",
          });
        }
      });

      const originalItem = document.getElementById(`gi-${activeItemId}`);
      if (originalItem) {
        const nameEl = originalItem.querySelector(
          ".gallery-item-name",
        ) as HTMLElement;
        const numberEl = originalItem.querySelector(
          ".gallery-item-number",
        ) as HTMLElement;
        if (nameEl) nameEl.textContent = originalPosition.nameText;
        if (numberEl) numberEl.textContent = originalPosition.numberText;
        const caption = originalItem.querySelector(
          ".gallery-item-caption",
        ) as HTMLElement;
        if (caption) caption.style.opacity = "0";
      }

      const {
        rect: originalRect,
        width: originalWidth,
        height: originalHeight,
      } = originalPosition;
      const closingItem = expandedItem;

      gsap.to(closingItem, {
        width: originalWidth,
        height: originalHeight,
        x: originalRect.left + originalWidth / 2 - window.innerWidth / 2,
        y: originalRect.top + originalHeight / 2 - window.innerHeight / 2,
        duration: SETTINGS.zoomDuration,
        ease: "hop",
        onComplete: () => {
          if (originalItem) {
            const captionElement = originalItem.querySelector(
              ".gallery-item-caption",
            ) as HTMLElement;
            const captionClone = document.createElement("div");
            captionClone.className = "gallery-caption-clone";
            captionClone.innerHTML = captionElement.innerHTML;

            const captionRect = captionElement.getBoundingClientRect();
            captionClone.style.position = "fixed";
            captionClone.style.left = `${captionRect.left}px`;
            captionClone.style.bottom = `${window.innerHeight - captionRect.bottom}px`;
            captionClone.style.width = `${captionRect.width}px`;
            captionClone.style.padding = "10px";
            captionClone.style.zIndex = "10002";
            document.body.appendChild(captionClone);

            const nameClone = captionClone.querySelector(
              ".gallery-item-name",
            ) as HTMLElement;
            const numberClone = captionClone.querySelector(
              ".gallery-item-number",
            ) as HTMLElement;
            nameClone.style.overflow = "hidden";
            numberClone.style.overflow = "hidden";

            const nameCloneSplit = new SplitType(nameClone, {
              types: "words",
            });
            const numberCloneSplit = new SplitType(numberClone, {
              types: "words",
            });

            if (nameCloneSplit.words)
              gsap.set(nameCloneSplit.words, { y: "100%", opacity: 0 });
            if (numberCloneSplit.words)
              gsap.set(numberCloneSplit.words, { y: "100%", opacity: 0 });

            if (nameCloneSplit.words) {
              gsap.to(nameCloneSplit.words, {
                y: "0%",
                opacity: 1,
                duration: 0.7,
                stagger: 0.03,
                ease: "power3.out",
              });
            }
            if (numberCloneSplit.words) {
              gsap.to(numberCloneSplit.words, {
                y: "0%",
                opacity: 1,
                duration: 0.7,
                stagger: 0.02,
                delay: 0.05,
                ease: "power3.out",
                onComplete: () => {
                  captionElement.style.opacity = "1";
                  if (captionClone.parentNode)
                    document.body.removeChild(captionClone);
                },
              });
            }
          }

          if (closingItem.parentNode) document.body.removeChild(closingItem);
          if (originalItem) originalItem.style.visibility = "visible";

          expandedItem = null;
          isExpanded = false;
          activeItem = null;
          originalPosition = null;
          activeItemId = null;
          canDrag = true;
          container.style.cursor = "grab";
          dragVelocityX = 0;
          dragVelocityY = 0;
          overlay.classList.remove("gallery-overlay-active");
        },
      });
    }

    function animate() {
      if (canDrag) {
        currentX += (targetX - currentX) * SETTINGS.dragEase;
        currentY += (targetY - currentY) * SETTINGS.dragEase;
        canvas.style.transform = `translate(${currentX}px, ${currentY}px)`;

        const now = Date.now();
        const distMoved = Math.sqrt(
          Math.pow(currentX - lastX, 2) + Math.pow(currentY - lastY, 2),
        );
        if (distMoved > 100 || now - lastUpdateTime > 120) {
          updateVisibleItems();
          lastX = currentX;
          lastY = currentY;
          lastUpdateTime = now;
        }
      }
      animFrameId = requestAnimationFrame(animate);
    }

    const onMouseDown = (e: MouseEvent) => {
      if (!canDrag) return;
      isDragging = true;
      mouseHasMoved = false;
      startX = e.clientX;
      startY = e.clientY;
      container.style.cursor = "grabbing";
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging || !canDrag) return;
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
        mouseHasMoved = true;
        hideDragHint();
      }
      const now = Date.now();
      const dt = Math.max(10, now - lastDragTime);
      lastDragTime = now;
      dragVelocityX = dx / dt;
      dragVelocityY = dy / dt;
      targetX += dx;
      targetY += dy;
      startX = e.clientX;
      startY = e.clientY;
    };

    const onMouseUp = () => {
      if (!isDragging) return;
      isDragging = false;
      if (canDrag) {
        container.style.cursor = "grab";
        if (Math.abs(dragVelocityX) > 0.1 || Math.abs(dragVelocityY) > 0.1) {
          targetX += dragVelocityX * SETTINGS.momentumFactor;
          targetY += dragVelocityY * SETTINGS.momentumFactor;
        }
      }
    };

    const onTouchStart = (e: TouchEvent) => {
      if (!canDrag) return;
      isDragging = true;
      mouseHasMoved = false;
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging || !canDrag) return;
      const dx = e.touches[0].clientX - startX;
      const dy = e.touches[0].clientY - startY;
      if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
        mouseHasMoved = true;
        hideDragHint();
      }
      targetX += dx;
      targetY += dy;
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    };

    const onTouchEnd = () => {
      isDragging = false;
    };

    const onOverlayClick = () => {
      if (isExpanded) closeExpandedItem();
    };

    const onResize = () => {
      if (isExpanded && expandedItem) {
        const targetWidth = window.innerWidth * SETTINGS.expandedScale;
        const aspectRatio = originalPosition!.height / originalPosition!.width;
        gsap.to(expandedItem, {
          width: targetWidth,
          height: targetWidth * aspectRatio,
          duration: 0.3,
          ease: "power2.out",
        });
      } else {
        updateVisibleItems();
      }
    };

    container.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    overlay.addEventListener("click", onOverlayClick);
    container.addEventListener("touchstart", onTouchStart);
    window.addEventListener("touchmove", onTouchMove);
    window.addEventListener("touchend", onTouchEnd);
    window.addEventListener("resize", onResize);

    updateVisibleItems();
    animate();

    return () => {
      cancelAnimationFrame(animFrameId);
      container.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      overlay.removeEventListener("click", onOverlayClick);
      container.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("resize", onResize);
      if (expandedItem?.parentNode) document.body.removeChild(expandedItem);
      visibleItems.forEach((itemId) => {
        const item = document.getElementById(`gi-${itemId}`);
        if (item?.parentNode === canvas) canvas.removeChild(item);
      });
      visibleItems.clear();
    };
  }, []);

  return (
    <>
      <MinimalNavbar />
      <main className={styles.page}>
        <div className={styles.container} ref={containerRef}>
          <div className={styles.canvas} ref={canvasRef} />
          <div className={styles.galleryOverlay} ref={overlayRef} />
        </div>
        <div className={styles.projectTitle}>
          <p ref={projectTitleRef} />
        </div>
        <div className={styles.dragHint} ref={dragHintRef} aria-hidden="true">
          <GalleryHorizontal className={styles.dragHintIcon} />
          <span className={styles.dragHintText}>
            <span className={styles.dragHintMobile}>Swipe to view more</span>
            <span className={styles.dragHintDesktop}>
              Drag with the mouse to see more
            </span>
          </span>
        </div>
        <div className={styles.pageVignetteContainer} aria-hidden="true">
          <div className={styles.pageVignette} />
          <div className={styles.pageVignetteStrong} />
          <div className={styles.pageVignetteExtreme} />
        </div>
      </main>
    </>
  );
};
