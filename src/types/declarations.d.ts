/// <reference types="vite-plugin-svgr/client" />

declare module "@fontsource-variable/space-grotesk";
declare module "@fontsource-variable/manrope";
declare module "swiper/css";
declare module "swiper/css/*";

interface ImportMetaEnv {
  readonly VITE_CONTENTFUL_SPACE_ID: string;
  readonly VITE_CONTENTFUL_ACCESS_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
