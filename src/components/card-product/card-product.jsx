import "./card-product.css";

const CardProduct = ({
  title,
  price,
  rate,
  img,
  handleAddToCart,
  oldPrice,
}) => {
  return (
    <div className="content-box">
      <div className="content-box__img">
        <img src={img} alt="" className="content-box__img-case" />
      </div>

      <div className="content-box__case">
        <div className="content-box__case-left">
          <h2 className="content-box__case-left__title">{title}</h2>
          <div className="content-box__case-left__mark">
            <img
              src="src/assets/Vector.svg"
              alt=""
              className="content-box__case-left__mark-img"
            />
            <div className="content-box__case-left__mark-text">{rate}</div>
          </div>
        </div>
        <div className="content-box__case-right">
          <div className="content-box__case-right__price1">{price} ₽</div>
          {oldPrice && (
            <div className="content-box__case-right__price2">{oldPrice} ₽</div>
          )}
          <button
            className="content-box__case-right__btn"
            onClick={() => handleAddToCart({ title, price, img })}
          >
            Купить
          </button>
        </div>
      </div>
    </div>
  );
};

export { CardProduct };
