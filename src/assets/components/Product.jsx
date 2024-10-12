import { Bathroom, Bedroom, Villa } from "../utils/Icons";
import Button from "./Button";
import style from "../styles/product.module.css";
import { Link } from "react-router-dom";

const Product = ({
  name,
  description,
  bedCount,
  bathCount,
  price,
  imgURL,
  id,
}) => {
  return (
    <article className={style.product} key={id}>
      <div className={style.product__img}>
        <img src={imgURL} alt={name} />
      </div>
      <div className={style.product__description}>
        <h5>{name}</h5>
        <p>
          {description} <Link>Read More</Link>
        </p>
      </div>
      <div className={style.product__quantity}>
        <span>
          {Bedroom} {bedCount} Bedroom
        </span>
        <span>
          {Bathroom} {bathCount} Bathroom
        </span>
        <span>{Villa} Villa</span>
      </div>
      <div className={style.product__price}>
        <div>
          <span>Price</span>
          <h5>${price}</h5>
        </div>
        <Button content="Browse Properties" bgColor={true} border={false} />
      </div>
    </article>
  );
};
export default Product;
