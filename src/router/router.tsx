import { Home } from "@/pages/home/Home";
import { Route, Routes } from "react-router";

export const Router = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  );
};
