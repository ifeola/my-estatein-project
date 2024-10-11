import { ArrowTopRight, Building, Home, Info, Value } from "../utils/Icons";
import style from "../styles/heroProp.module.css";

const data = [
  {
    icon: Home,
    title: "Find Your Dream Home",
  },
  {
    icon: Value,
    title: "Unlock Property Value",
  },
  {
    icon: Building,
    title: "Effortless Property Management",
  },
  {
    icon: Info,
    title: "Smart Investments, Informed Decisions",
  },
];

const Property = () => {
  return (
    <div className={style.properties}>
      {data.map((item, index) => {
        return (
          <div key={index}>
            <span className={style.prop__arrow}>{ArrowTopRight}</span>
            <div className={style.circle__outer}>
              <span className={style.circle__inner}>{item.icon}</span>
            </div>
            <h6>{item.title}</h6>
          </div>
        );
      })}
    </div>
  );
};
export default Property;
