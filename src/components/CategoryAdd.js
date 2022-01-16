import React, { useState } from "react";
import PropTypes from "prop-types";

export const CategoryAdd = ({ categories, setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const handlerInputChange = (e) => {
    // console.log(e.target.value);
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 1) {
      setCategories([inputValue, ...categories]);
      setInputValue("");
      // setCategories((cat) => [...cat, inputValue]);//De esta forma, no es necesario tarer 'categories' ya que usamos la referencia anterio
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      {" "}
      <input
        type="text"
        placeholder="Agrega algo"
        value={inputValue}
        onChange={handlerInputChange}
      />
    </form>
  );
};

CategoryAdd.propTypes = {
  setCategories: PropTypes.func.isRequired,
  categories: PropTypes.array,
};
