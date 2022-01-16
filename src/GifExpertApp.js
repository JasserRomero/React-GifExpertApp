import React, { useState } from "react";
import { CategoryAdd } from "./components/CategoryAdd";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {
  //   const categorias = ["Boku No Hero", "One Punch", "Dragon ball"];

  const [categories, setCategories] = useState(["Dragon ball"]);

  return (
    <>
      <h2>Gif ExpertApp</h2>
      <CategoryAdd categories={categories} setCategories={setCategories} />

      <hr />
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
