import "./header.css";
import { Link } from "react-router-dom";

const Header = ({ totalQuantity }) => {
  return (
    <header className="header">
      <Link to="/">
        <img src="src/assets/logo.svg" alt="" className="header-logo" />
      </Link>
      <div className="header-box">
        <div className="header-box__case">
          <img
            src="src/assets/like.svg"
            alt=""
            className="header-box__case-img"
          />
          <span className="header-box__case-value">2</span>
        </div>
        <Link to="/cart">
          <div className="header-box__case">
            <img
              src="src/assets/shop.svg"
              alt=""
              className="header-box__case-img"
            />
            <span className="header-box__case-value">{totalQuantity}</span>
          </div>
        </Link>
      </div>
    </header>
  );
};

export { Header };
