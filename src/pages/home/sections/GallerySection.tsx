import { Link } from "react-router";
import styles from "./GallerySection.module.scss";

const IMAGE_URLS = [
  "https://cdn.cosmos.so/0f164449-f65e-4584-9d62-a9b3e1f4a90a?format=jpeg",
  "https://cdn.cosmos.so/74ccf6cc-7672-4deb-ba13-1727b7dc6146?format=jpeg",
  "https://cdn.cosmos.so/2f49a117-05e7-4ae9-9e95-b9917f970adb?format=jpeg",
  "https://cdn.cosmos.so/7b5340f5-b4dc-4c08-8495-c507fa81480b?format=jpeg",
  "https://cdn.cosmos.so/f733585a-081e-48e7-a30e-e636446f2168?format=jpeg",
  "https://cdn.cosmos.so/47caf8a0-f456-41c5-98ea-6d0476315731?format=jpeg",
  "https://cdn.cosmos.so/f99f8445-6a19-4a9a-9de3-ac382acc1a3f?format=jpeg",
];

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
    src: IMAGE_URLS[0],
    name: "Chromatic Loopscape",
    num: "#00001",
    col: 1,
    row: 1,
    rowEnd: 3,
  },
  {
    id: 1,
    src: IMAGE_URLS[1],
    name: "Solar Bloom",
    num: "#00002",
    col: 2,
    row: 1,
    rowEnd: 4,
  },
  {
    id: 2,
    src: IMAGE_URLS[2],
    name: "Neon Handscape",
    num: "#00003",
    col: 3,
    row: 1,
    rowEnd: 3,
  },
  {
    id: 3,
    src: IMAGE_URLS[3],
    name: "Echo Discs",
    num: "#00004",
    col: 4,
    row: 1,
    rowEnd: 4,
  },
  {
    id: 4,
    src: IMAGE_URLS[4],
    name: "Void Gaze",
    num: "#00005",
    col: 1,
    row: 3,
    rowEnd: 6,
  },
  {
    id: 5,
    src: IMAGE_URLS[5],
    name: "Gravity Sync",
    num: "#00006",
    col: 2,
    row: 4,
    rowEnd: 6,
  },
  {
    id: 6,
    src: IMAGE_URLS[6],
    name: "Heat Core",
    num: "#00007",
    col: 3,
    row: 3,
    rowEnd: 6,
  },
  {
    id: 7,
    src: IMAGE_URLS[0],
    name: "Fractal Mirage",
    num: "#00008",
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
          <div>
            <h2 className={styles.heading}>GALLERY</h2>
            <div className={styles.headingUnderline} />
          </div>
          <Link to="/gallery" className={styles.viewAllLink}>
            View all
          </Link>
        </div>

        <div className={styles.grid}>
          {GALLERY_PREVIEW.map((item) => (
            <div
              key={item.id}
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
              <div className={styles.caption}>
                <div className={styles.itemName}>{item.name}</div>
                <div className={styles.itemNum}>{item.num}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
