import Title from "./Title";
import style from "../styles/cta.module.css";

const CTA = () => {
  return (
    <section className={style.cta}>
      <Title
        content="Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance."
        title="Start Your Real Estate Journey Today"
        desc={{ bgColor: true, border: false, content: "View All Properties" }}
      />
    </section>
  );
};
export default CTA;
