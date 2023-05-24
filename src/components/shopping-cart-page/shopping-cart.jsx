import "./shopping-cart.css";
import { ProductCardInCart } from "../cart-product-card/product-card-in-cart";

const ShoppingCart = ({
  cartProducts,
  handleIncrement,
  handleDecrement,
  handleDeleteProductFromCart,
}) => {
  const totalPrice = cartProducts.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
  const formattedTotalPrice = totalPrice.toLocaleString("ru-RU");
  return (
    <>
      <h1 className="title">Корзина</h1>

      <div className="shop">
        <div className="shop-left__container">
          {cartProducts.length > 0 ? (
            cartProducts.map((item) => (
              <ProductCardInCart
                item={item}
                title={item.title}
                price={item.price}
                quantity={item.quantity}
                img={item.img}
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
                handleDeleteProductFromCart={handleDeleteProductFromCart}
              />
            ))
          ) : (
            <div className="cart-text">Товары в корзине отсутствуют</div>
          )}
        </div>
        <div className="shop-right">
          <div className="shop-right__top">
            <div className="shop-right__top-text">ИТОГО</div>
            <div className="shop-right__top-price">₽ {formattedTotalPrice}</div>
          </div>
          <a href="" className="shop-right__btn">
            Перейти к оформлению
          </a>
        </div>
      </div>
    </>
  );
};

export { ShoppingCart };
