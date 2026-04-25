import { galleryImages } from "@/utils/constants";
import { Link } from "react-router";
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

export const GallerySection = () => {
  return (
    <section className={styles.section} id="gallery">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.heading}>GALLERY</h2>
        </div>

        <div className={styles.grid}>
          {GALLERY_PREVIEW.map((item) => (
            <Link
              key={item.id}
              to="/gallery"
              className={styles.item}
              style={
                {
                  "--gc": item.col,
                  "--gr": item.row,
                  "--ge": item.rowEnd,
                } as React.CSSProperties
              }
            >
              <img src={item.src} alt={item.name} draggable={false} />
              <span className={styles.viewLabel}>View Gallery</span>
              <div className={styles.caption}>
                <div className={styles.itemName}>{item.name}</div>
                <div className={styles.itemNum}>{item.num}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
