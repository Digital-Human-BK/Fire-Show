import styles from "./GallerySection.module.scss";
import { cn } from "@/utils/styles";
import { galleryImages } from "./GallerySection.constants";

export const GallerySection = () => {
  return (
    <section className={styles.section} id="gallery">
      <div className={styles.header}>
        <h2 className={styles.heading}>VISUAL ARCHIVE</h2>
        <div className={styles.headingUnderline} />
      </div>

      <div className={styles.grid}>
        {galleryImages.map((img) => (
          <div
            key={img.id}
            className={cn(
              styles.cell,
              styles[img.cellClass as keyof typeof styles],
            )}
          >
            <img src={img.src} alt={img.alt} />
            <div className={styles.overlay}>
              <span className="material-symbols-outlined">fullscreen</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
