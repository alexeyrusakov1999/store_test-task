import "./product-card-in-cart.css";

const ProductCardInCart = ({
  title,
  price,
  quantity,
  img,
  handleIncrement,
  handleDecrement,
  handleDeleteProductFromCart,
  item,
}) => {
  return (
    <div className="shop-left">
      <div className="shop-left__delete opacity">
        <button
          className="shop-left__delete-btn"
          onClick={() => handleDeleteProductFromCart(item)}
        >
          <img src="src/assets/delete.svg" alt="delete_btn" />
        </button>
      </div>
      <div className="shop-left__case">
        <img src={img} alt="product_img" className="shop-left__case-img" />
        <div className="shop-left__case-text">
          <h3 className="shop-left__case-text__title">{title}</h3>
          <h4 className="shop-left__case-text__price">{price} ₽</h4>
        </div>
      </div>

      <div className="shop-left__bottom">
        <div className="shop-left__bottom-calculator">
          <button
            className="shop-left__bottom-calculator__btn"
            onClick={() => handleDecrement(item)}
          >
            <img src="src/assets/minus.svg" alt="minus" />
          </button>
          <div className="shop-left__bottom-calculator__data">{quantity}</div>
          <button
            className="shop-left__bottom-calculator__btn"
            onClick={() => handleIncrement(item)}
          >
            +
          </button>
        </div>
        <h5 className="shop-left__bottom-price"> {price * quantity} ₽</h5>
      </div>
    </div>
  );
};

export { ProductCardInCart };
