import classes from "./GallerySection.module.scss";

const galleryImages = [
  {
    id: "mountain",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB1LQHAK_x-0ug_HeWius4ViQfo9_dUFwZB1QoTv1xLY0Leu-bd6q5g7XWtCggz-dB1WAg0NxLNStsWBldtJi3VPbrI-ADxQxzPNT4paLpcs8YKRqMgrw4DaYDeZnzS2v79Xq0PV4K9fna4cw2-ofNYS6oreux6jskxHgeZEk_qAh6uCghe-bZqd5SMAY4eRfqYtZ0Kt9d5JiJPd5kw8i-ILneb6vXjsQ1IAK7LqsPs09ZRGAxDPIDBBlMo4T1dct21a4Kn4rPXXLwP",
    alt: "Dramatic wide landscape at night with a small fire performance figure silhouetted against a mountain range",
    cellClass: classes.cellHero,
  },
  {
    id: "tools",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtPAdLGEdT2kVuCQp5mMi792D-u_MjlVKZZYFmAUW5Xh-eS7lA3C89UWe7IOJvQ3EVvGYNknX4Al80-fr6pQA7IppNKVLp7YsxRPpoUrP71Rz5Si7hUdb5sdtHVSOIWlvlnj3UWlh0ZpNiEz0xeWI3cWvHn-Oieda1YgNkmib68uxW75hw0e2NvP8g55L84HaNtl7lVShrudUEQms_vX2XDlKQm9gkFHdO25YJfHU1fsFzibLc9e6R0jcuayrPi5ziHv14uusV2J8Z",
    alt: "Close up of specialized fire tools and props organized neatly on a dark surface",
    cellClass: classes.cellSmall,
  },
  {
    id: "face",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDmGFxpwQYjnZrrDci7AG-AACOam6gVNaJEFlfMyBYQGPYLFX6qcdZppcNPmkRbh6XkCyFu5EzQ07kkr7AuVW-GCmhZPwn5CsJ_i0Fab_jyQoR1vK1b6KztFU2napGY4JU-OYNB9TNZGUZx8i1HZpY4nWKstVUU9EsIKFrWwIFUg2YnUXAghEVwC-w3epXmdmYuAaZyolFf2Hb1edNIMXZwtz2Ap-acD4HQreLpFdn3WeLSCQ9HI9qG1vJOfskQXJ3VAWDsnQ0_uTmv",
    alt: "Intense close-up of a fire dancer's face illuminated by a nearby torch during a show",
    cellClass: classes.cellSmall,
  },
  {
    id: "stage",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAOWiWxnxTkKYPhyWATeHP8RwSItDya2vXCPXpMUIP_1V_seuK1o9vp1AtjelFR7OuZfOXwSzJDs1W8-YmBlG3CqV_HYF7qZij0pkt3ZWTwi0nHS_Uu8_-fTRX-i38hoqdraBqDspnj_C6AxeaevYqFeMstxZNatrqHTTvxSH1VEfwKHQ6PPFSfPfRic5PQ1ZF0o5SB5DZ378X4vtvv3jEj7Jl8UezN_z9ezrgYfabZfXYBGx0e_AEYjvOEv3AUed7iAaLiklRS0ZlS",
    alt: "Wide shot of multiple fire performers synchronized on a large stage with red smoke and bright lighting",
    cellClass: classes.cellWide,
  },
] as const;

export const GallerySection = () => {
  return (
    <section className={classes.section} id="gallery">
      <div className={classes.header}>
        <h2 className={classes.heading}>VISUAL ARCHIVE</h2>
        <div className={classes.headingUnderline} />
      </div>

      <div className={classes.grid}>
        {galleryImages.map((img) => (
          <div key={img.id} className={`${classes.cell} ${img.cellClass}`}>
            <img src={img.src} alt={img.alt} />
            <div className={classes.overlay}>
              <span className="material-symbols-outlined">fullscreen</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
