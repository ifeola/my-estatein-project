import { Star } from "../utils/Icons";
import style from "../styles/testimonial.module.css";

const Testimonial = ({ title, description, name, imgURL, location }) => {
  return (
    <article className={style.testimonial}>
      <div className={style.testimonial__rating}>
        <span>{Star}</span>
        <span>{Star}</span>
        <span>{Star}</span>
        <span>{Star}</span>
        <span>{Star}</span>
      </div>
      <div className={style.testimonial__content}>
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
      <div className={style.testimonial__client}>
        <img src={imgURL} alt={name} />
        <div>
          <h6>{name}</h6>
          <p>{location}</p>
        </div>
      </div>
    </article>
  );
};
export default Testimonial;
