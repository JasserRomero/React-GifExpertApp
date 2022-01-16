import React from "react";

export const GifGridItems = ({ url, title }) => {
  return (
    <div className="card animate__animated animate__bounce animate__faster">
      <img src={url} alt={title}></img>
      <p>{title}</p>
    </div>
  );
};
