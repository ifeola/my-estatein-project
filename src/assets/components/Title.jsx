import { Abstract } from "../utils/Icons";
import style from "../styles/title.module.css";

const Title = ({ title, content, desc }) => {
  return (
    <div>
      <span>{Abstract}</span>
      <div className={style.title__content}>
        <div className={style.title__desc}>
          <h2>{title}</h2>
          <p>{content}</p>
        </div>
        <button className={style.button}>{desc}</button>
      </div>
    </div>
  );
};
export default Title;
