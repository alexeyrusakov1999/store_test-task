import "./product-list.css";
import { useState } from "react";
import { dataList } from "../../data";
import { CardProduct } from "../card-product/card-product";

const ProductList = ({ typeTitle, handleAddToCart }) => {
  const [productsList, setProductList] = useState([...dataList]);
  const filteredList = productsList.filter((item) => item.type === typeTitle);

  return (
    <>
      <h2 className="type_title">{typeTitle}</h2>
      <section className="content-section">
        {filteredList.map((item, index) => (
          <CardProduct
            handleAddToCart={handleAddToCart}
            title={item.title}
            price={item.price}
            rate={item.rate}
            img={item.img}
            oldPrice={item.oldPrice}
            key={item.title + index}
          />
        ))}
      </section>
    </>
  );
};

export { ProductList };
