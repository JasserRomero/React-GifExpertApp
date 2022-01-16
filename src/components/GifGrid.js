import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItems } from "./GifGridItems";

export const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {loading && <p>Cargando...</p>}
      <div className="card-grid">
        {images.map((img) => (
          //Podemos pasarle al 'GifGridItems' cada propiedad individualment (id,url,title) O usar [...img] que es como pasarle las propiedades individualmente
          <GifGridItems key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
