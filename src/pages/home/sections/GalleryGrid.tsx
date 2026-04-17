import styles from "./GalleryGrid.module.scss";

const galleryImages = [
  {
    id: "poi",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBDq8yRKHespvrBwZXSoMJ7oiwnM3YqJYoBt4LpeW_VtD0a9UnRSVVvMz4ivCPO4oiFOJ7yeEyuXdZ5hgRzH7Ql29PuB8YwlRjWqKUjiUdiruFDIA4VZE5bN0B3tum81OWan4d8cMGhqEmcBsvU2X_I3weiqfud-tiBM1frV2yCUf4rZZrDYiBxqW6d0HAqFMfpN4a5GT8YGJT_2ctyRCL35Fcjsqengp2QcXTh30Soy7_BWXrwShFbDusMzub0mjNtyI9o0z3QsnA",
    alt: "Atmospheric shot of fire poi spinning in the dark, creating a perfect circle of orange light",
    className: styles.imageSquare,
  },
  {
    id: "beach",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZUa-KmuL5fcMcJh3PKGAQ4zqcFzlN0LwVAqxuddYqxAQgoH4BMvctfkaxeMSO-fK5R5q-HPIQL5a7kAO42_6m3LM1a0NiyJOV3kD22hGSw5B8wEllqCvuKQqxrOP-A4F17Wncy2VR6cm3HuRJGCXpS5ZPubLd7yxcibMPC0COQvBRi0jiofih1NoDnTrTt-2RP1dohr-ZJ-R2TIVqzCQWn7_J-TLW8MMxJfLzQ-fOT7w6T9DiQcUkAPYTJoJuKgKjfm_klPNrDhQl",
    alt: "Wide cinematic shot of a fire show on a beach at night, reflections of flames dancing on the wet sand",
    className: styles.imageWide,
  },
  {
    id: "eater",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBLkbCfpIaHL8q7bqJfJshNX4J-UFggIG0UMyZe2RiKZsYwbpNrcQ00gKTNHk0h1pSVx8vFEV-PE8cKkGfR0YJu_i__8FHbnEmK9KwZDazFQayG68y1IfUHlMPat1SDroP0AQEymSXJEOuYqPCbXyMq45qF7ulSmjyXMb6IkLfL7yJdAZLHR36X_kAVorndxNTAzm8RmzBEorvz6yBigqe_T7SFkN1fPBxcLg8XvfOizYxVMNAOkzPmb2SOQiC1IMFFI0sLB3nrAz9l",
    alt: "Artistic close-up of a fire eater with a flaming torch close to their face, dramatic lighting highlighting facial features",
    className: styles.imageHalf,
  },
  {
    id: "whip",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-jW9VKhbfo6P36fPjm0p7WlvIQvDZFf8UOVG3GBZ5Ayh-DP62LUYIkd8d6VY27Dvi9aC8LB9PISIzDg4bCkNLbz0TG8JzJq44qUGcg_n-Wxp2go3X6vzOXAGHno9NKRqxLQZ-1p-xNyvGOdRgGTgDqmzMgdWce51Del9gA5t7vM0Hm7ObMsPzJCQjnIjWH__sZjguvNmErc2EGE_7rkxH2p99Nbf4No8AGtSN7JUX1l3PjIIAadN3mvCMYa8KEd6J2e2j8TY3j8wi",
    alt: "Dynamic shot of a fire whip cracking, leaving a trail of sparks against a deep navy blue twilight sky",
    className: styles.imageHalf,
  },
] as const;

export const GalleryGrid = () => {
  return (
    <section className={styles.section} id="gallery">
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.headerArea}>
            <span className={styles.eyebrow}>The Archive</span>
            <h2 className={styles.heading}>Visual Echoes of Heat</h2>
          </div>
          {galleryImages.map((img) => (
            <div
              key={img.id}
              className={`${styles.imageWrapper} ${img.className}`}
            >
              <img src={img.src} alt={img.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
