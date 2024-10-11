import { Bathroom, Bedroom, Villa } from "../utils/Icons";
import Button from "./Button";

const Product = ({ name, description, bedCount, bathCount, price }) => {
  return (
    <article>
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <h5>{name}</h5>
        <p>{description}</p>
      </div>
      <div>
        <span>
          {Bedroom} {bedCount} Bedroom
        </span>
        <span>
          {Bathroom} {bathCount} Bathroom
        </span>
        <span>{Villa} Villa</span>
      </div>
      <div>
        <div>
          <span>Price</span>
          <h5>${price}</h5>
        </div>
        <Button />
      </div>
    </article>
  );
};
export default Product;
