import { useEffect, useRef } from "react";
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

import styles from "./AppLightbox.module.scss";

export type AppLightboxSlide = {
  src: string;
  alt?: string;
  title?: string;
  description?: string;
};

type AppLightboxProps = {
  open: boolean;
  close: () => void;
  index: number;
  slides: AppLightboxSlide[];
};

export const AppLightbox = ({
  open,
  close,
  index,
  slides,
}: AppLightboxProps) => {
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

  return (
    <Lightbox
      open={open}
      close={close}
      index={index}
      slides={slides}
      plugins={[Captions, Fullscreen, Slideshow, Thumbnails, Zoom]}
      zoom={{ scrollToZoom: true, maxZoomPixelRatio: 3 }}
      thumbnails={{ ref: thumbnailsRef }}
      className={styles.lightbox}
      toolbar={{ buttons: ["zoom", "fullscreen", "slideshow", "close"] }}
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
  );
};
