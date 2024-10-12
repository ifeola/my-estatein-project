import style from "../styles/faq.module.css";
import Button from "./Button";

const FAQ = ({ title, description }) => {
  return (
    <article className={style.faq}>
      <h5>{title}</h5>
      <p>{description}</p>
      <Button content="Read More" bgColor={false} border={true} />
    </article>
  );
};
export default FAQ;
