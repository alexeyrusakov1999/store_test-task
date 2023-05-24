import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { Outlet } from "react-router-dom";

const Layout = ({ totalQuantity }) => {
  return (
    <div className="container">
      <Header totalQuantity={totalQuantity} />
      <Outlet />
      <Footer />
    </div>
  );
};

export { Layout };
