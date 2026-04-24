import { Route, Routes } from "react-router";

import { DesignSystem } from "@/pages/design-system/DesignSystem";
import { Gallery } from "@/pages/gallery/Gallery";
import { Home } from "@/pages/home/Home";

export const Router = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/design-system" element={<DesignSystem />} />
    </Routes>
  );
};
