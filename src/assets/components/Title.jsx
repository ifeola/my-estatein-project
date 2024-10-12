import { Abstract } from "../utils/Icons";
import style from "../styles/title.module.css";
import Button from "./Button";

const Title = ({ title, content, desc, icon }) => {
  return (
    <div>
      {icon && <span>{Abstract}</span>}
      <div className={style.title__content}>
        <div className={style.title__desc}>
          <h2>{title}</h2>
          <p>{content}</p>
        </div>
        <Button
          content={desc.content}
          bgColor={desc.bgColor}
          border={desc.border}
        />
      </div>
    </div>
  );
};
export default Title;
