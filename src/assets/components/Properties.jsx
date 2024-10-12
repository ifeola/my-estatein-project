import Title from "./Title";
import style from "../styles/heroProps.module.css";
import Product from "./Product";
import Pagination from "./Pagination";

const data = [
  {
    imgURL: "/assets/serenity-villa.png",
    name: "Seaside Serenity Villa",
    description:
      "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood...",
    bedCount: 4,
    bathCount: 4,
    price: 555000,
  },
  {
    imgURL: "/assets/metropolitan-haven.png",
    name: "Metropolitan Haven",
    description:
      "A chic and fully-furnished 2-bedroom apartment with panoramic city views...",
    bedCount: 2,
    bathCount: 2,
    price: 465000,
  },
  {
    imgURL: "/assets/retreat-cottage.png",
    name: "Rustic Retreat Cottage",
    description:
      "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community...",
    bedCount: 4,
    bathCount: 4,
    price: 345000,
  },
];

const Properties = () => {
  return (
    <section className={style.properties}>
      <Title
        icon={true}
        content='Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click "View Details" for more information.'
        title="Featured Properties"
        desc={{ bgColor: false, border: true, content: "View All Properties" }}
      />

      <div>
        <div className={style.products}>
          {data.map((product, index) => {
            return (
              <Product
                key={index}
                id={index}
                name={product.name}
                imgURL={product.imgURL}
                description={product.description}
                bedCount={product.bedCount}
                bathCount={product.bathCount}
                price={product.price}
              />
            );
          })}
        </div>
        <Pagination pages={60} />
      </div>
    </section>
  );
};
export default Properties;
