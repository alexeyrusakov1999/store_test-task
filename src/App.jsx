import "./App.css";
import "./media.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ContentList } from "./components/content-list/content-list";
import { ShoppingCart } from "./components/shopping-cart-page/shopping-cart";
import { NotFoundPage } from "./components/not-found-page/not-found-page";
import { Layout } from "./components/layout-page/layout";

function App() {
  const [cartProducts, setCartProducts] = useState([
    {
      img: "src/assets/ear/i1.png",
      title: "Apple BYZ S852I",
      price: 2927,
      oldPrice: 3527,
      rate: 4.7,
      type: "Наушники",
      quantity: 1,
    },
  ]);

  const totalQuantity = cartProducts.reduce(
    (total, product) => total + product.quantity,
    0
  );

  const handleIncrement = (item) => {
    setCartProducts((prevCartProducts) =>
      prevCartProducts.map((cartItem) =>
        cartItem.title === item.title
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    );
  };

  const handleDecrement = (item) => {
    setCartProducts((prevCartProducts) =>
      prevCartProducts.map((cartItem) =>
        cartItem.title === item.title && item.quantity > 0
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      )
    );
  };

  const handleDeleteProductFromCart = (product) => {
    setCartProducts((prevCartProducts) =>
      prevCartProducts.filter((cartItem) => cartItem.title !== product.title)
    );
  };

  const handleAddToCart = (product) => {
    const chosenProduct = cartProducts.find(
      (cartItem) => cartItem.title === product.title
    );
    if (chosenProduct) {
      handleIncrement(product);
    } else {
      setCartProducts((prevCartProducts) => [
        ...prevCartProducts,
        { ...product, quantity: 1 },
      ]);
    }
  };

  return (
    <Routes>
      <Route path="/" element={<Layout totalQuantity={totalQuantity} />}>
        <Route
          index
          element={<ContentList handleAddToCart={handleAddToCart} />}
        />
        <Route
          path="cart"
          element={
            <ShoppingCart
              cartProducts={cartProducts}
              handleIncrement={handleIncrement}
              handleDecrement={handleDecrement}
              handleDeleteProductFromCart={handleDeleteProductFromCart}
            />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
