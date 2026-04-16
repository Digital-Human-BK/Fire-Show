import { Route, Routes } from "react-router";

import { Home } from "@/pages/home/Home";
import { DesignSystem } from "@/pages/design-system/DesignSystem";

export const Router = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/design-system" element={<DesignSystem />} />
    </Routes>
  );
};
