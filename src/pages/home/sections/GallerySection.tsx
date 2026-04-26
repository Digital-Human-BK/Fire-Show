import { galleryImages } from "@/utils/constants";
import { useEffect, useRef, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";

import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

import CircleChevronLeft from "@/assets/icons/circle-chevron-left.svg?react";
import CircleChevronRight from "@/assets/icons/circle-chevron-right.svg?react";
import FullscreenIcon from "@/assets/icons/fullscreen.svg?react";
import MonitorPause from "@/assets/icons/monitor-pause.svg?react";
import MonitorPlay from "@/assets/icons/monitor-play.svg?react";
import MonitorX from "@/assets/icons/monitor-x.svg?react";
import ZoomIn from "@/assets/icons/zoom-in.svg?react";
import ZoomOut from "@/assets/icons/zoom-out.svg?react";

import styles from "./GallerySection.module.scss";

// Desktop grid: 4 cols × 5 rows (160px each, 10px gap → 840px total).
// col/row/rowEnd use 1-based CSS grid lines.
type PreviewItem = {
  id: number;
  src: string;
  name: string;
  num: string;
  col: number;
  row: number;
  rowEnd: number;
};

const GALLERY_PREVIEW: PreviewItem[] = [
  {
    id: 0,
    src: galleryImages[0],
    name: "Chromatic Loopscape",
    num: "#FIRE SHOW",
    col: 1,
    row: 1,
    rowEnd: 3,
  },
  {
    id: 1,
    src: galleryImages[1],
    name: "Solar Bloom",
    num: "#FIRE SHOW",
    col: 2,
    row: 1,
    rowEnd: 4,
  },
  {
    id: 2,
    src: galleryImages[2],
    name: "Neon Handscape",
    num: "#FIRE SHOW",
    col: 3,
    row: 1,
    rowEnd: 3,
  },
  {
    id: 3,
    src: galleryImages[3],
    name: "Echo Discs",
    num: "#FIRE SHOW",
    col: 4,
    row: 1,
    rowEnd: 4,
  },
  {
    id: 4,
    src: galleryImages[4],
    name: "Void Gaze",
    num: "#FIRE SHOW",
    col: 1,
    row: 3,
    rowEnd: 6,
  },
  {
    id: 5,
    src: galleryImages[5],
    name: "Gravity Sync",
    num: "#FIRE SHOW",
    col: 2,
    row: 4,
    rowEnd: 6,
  },
  {
    id: 6,
    src: galleryImages[1],
    name: "Heat Core",
    num: "#FIRE SHOW",
    col: 3,
    row: 3,
    rowEnd: 6,
  },
  {
    id: 7,
    src: galleryImages[0],
    name: "Fractal Mirage",
    num: "#FIRE SHOW",
    col: 4,
    row: 4,
    rowEnd: 6,
  },
];

const LIGHTBOX_SLIDES = GALLERY_PREVIEW.map((item) => ({
  src: item.src,
  alt: item.name,
  title: item.name,
  description: item.num,
}));

export const GallerySection = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const thumbnailsRef = useRef<{
    visible: boolean;
    show: () => void;
    hide: () => void;
  }>(null);

  useEffect(() => {
    const handler = () => {
      if (document.fullscreenElement) {
        thumbnailsRef.current?.hide();
      } else {
        thumbnailsRef.current?.show();
      }
    };
    document.addEventListener("fullscreenchange", handler);
    return () => document.removeEventListener("fullscreenchange", handler);
  }, []);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section className={styles.section} id="gallery">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.heading}>GALLERY</h2>
        </div>

        <div className={styles.grid}>
          {GALLERY_PREVIEW.map((item, index) => (
            <div
              key={item.id}
              className={styles.item}
              role="button"
              tabIndex={0}
              onClick={() => openLightbox(index)}
              onKeyDown={(e) => e.key === "Enter" && openLightbox(index)}
              style={
                {
                  "--gc": item.col,
                  "--gr": item.row,
                  "--ge": item.rowEnd,
                  "--range-start": `${(item.row - 1) * 4}%`,
                  "--range-end": `${(item.row - 1) * 4 + 15}%`,
                } as React.CSSProperties
              }
            >
              <img src={item.src} alt={item.name} draggable={false} />
              <div className={styles.caption}>
                <div className={styles.itemName}>{item.name}</div>
                <div className={styles.itemNum}>{item.num}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={LIGHTBOX_SLIDES}
        plugins={[Captions, Fullscreen, Slideshow, Thumbnails, Zoom]}
        zoom={{ scrollToZoom: true, maxZoomPixelRatio: 3 }}
        thumbnails={{ ref: thumbnailsRef }}
        className={styles.lightbox}
        toolbar={{
          buttons: ["zoom", "fullscreen", "slideshow", "close"],
        }}
        render={{
          iconPrev: () => <CircleChevronLeft />,
          iconNext: () => <CircleChevronRight />,
          iconClose: () => <MonitorX />,
          iconZoomIn: () => <ZoomIn />,
          iconZoomOut: () => <ZoomOut />,
          iconSlideshowPlay: () => <MonitorPlay />,
          iconSlideshowPause: () => <MonitorPause />,
          iconEnterFullscreen: () => <FullscreenIcon />,
          iconExitFullscreen: () => <FullscreenIcon />,
        }}
      />
    </section>
  );
};
