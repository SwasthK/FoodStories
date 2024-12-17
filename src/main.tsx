import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home.tsx";
import { Shop } from "./Pages/Shop.tsx";
import { Recipe } from "./Pages/Recipe.tsx";
import { NotFound } from "./Pages/NotFound.tsx";
import { Layout } from "./Layout/Layout.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="/" element={<Home />} />
        <Route path="/kitchen/">
          <Route index path="" element={<Shop />} />
          <Route path="recipe/:id" element={<Recipe />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
