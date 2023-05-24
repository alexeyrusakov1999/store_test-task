import { FC } from "react";
import "./content-list.css";
import { productTypes } from "../../data";
import { ProductList } from "../product-list/product-list";

const ContentList = ({ handleAddToCart }) => {
  return (
    <div className="content">
      {productTypes.map((title, index) => (
        <ProductList
          typeTitle={title}
          key={title + index}
          handleAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
};

export { ContentList };
