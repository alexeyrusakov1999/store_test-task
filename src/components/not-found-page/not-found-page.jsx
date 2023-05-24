import "./not-found-page.css";
import { FC } from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="error">
      Упс... Кажется, что-то пошло не так. Вы можете вернуться на
      <Link to="/">главную страницу</Link>.
    </div>
  );
};

export { NotFoundPage };
