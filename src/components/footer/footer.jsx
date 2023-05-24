import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <img src="src/assets/logo.svg" alt="logo" className="footer-logo" />
      <div className="footer-menu">
        <a href="" className="footer-menu__link opacity">
          Избранное
        </a>
        <a href="" className="footer-menu__link opacity">
          Корзина
        </a>
        <a href="" className="footer-menu__link opacity">
          Контакты
        </a>
      </div>
      <div className="footer-services">
        <div className="footer-services__text">Условия сервиса</div>
        <div className="footer-services__box">
          <img
            src="src/assets/world.svg"
            alt=""
            className="footer-services__box-img"
          />
          <div className="footer-services__box-link opacity footer-services__box-link__active">
            Рус
          </div>
          <div className="footer-services__box-link opacity">Eng</div>
        </div>
      </div>
      <div className="footer-soc">
        <a href="" className="footer-soc__link opacity">
          <img
            src="src/assets/s1.svg"
            alt=""
            className="footer-soc__link-img"
          />
        </a>
        <a href="" className="footer-soc__link opacity">
          <img
            src="src/assets/s2.svg"
            alt=""
            className="footer-soc__link-img"
          />
        </a>
        <a href="" className="footer-soc__link opacity">
          <img
            src="src/assets/s3.svg"
            alt=""
            className="footer-soc__link-img"
          />
        </a>
      </div>
    </footer>
  );
};

export { Footer };
