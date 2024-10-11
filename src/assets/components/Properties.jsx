import Title from "./Title";
import style from "../styles/heroProps.module.css";

const data = [
  {
    name: "Seaside Serenity Villa",
    description:
      "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood... Read More",
    bedCount: 4,
    bathCount: 4,
    price: 555000,
  },
  {
    name: "Metropolitan Haven",
    description:
      "A chic and fully-furnished 2-bedroom apartment with panoramic city views... Read More",
    bedCount: 2,
    bathCount: 2,
    price: 555000,
  },
  {
    name: "Rustic Retreat Cottage",
    description:
      "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community... Read More",
    bedCount: 4,
    bathCount: 4,
    price: 555000,
  },
];

const Properties = () => {
  return (
    <section>
      <Title
        content='Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click "View Details" for more information.'
        title="Featured Properties"
        desc="View All Properties"
      />
    </section>
  );
};
export default Properties;
