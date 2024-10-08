import Button from "../components/Button";
import style from "../styles/hero.module.css";

const Hero = () => {
  return (
    <div className={style.hero}>
      <div className={style.hero__content}>
        <h1>Discover Your Dream Property with Estatein</h1>
        <p className={style.hero__copy}>
          Your journey to finding the perfect property begins here. Explore our
          listings to find the home that matches your dreams.
        </p>
        <div className={style.hero__ctas}>
          <Button content="Learn More" bgColor={false} border={true} />
          <Button content="Browse Properties" bgColor={true} border={false} />
        </div>
        <div className={style.hero__info}>
          <div>
            <h3>200+</h3>
            <p>Happy Customers</p>
          </div>
          <div>
            <h3>10k+</h3>
            <p>Properties For Clients</p>
          </div>
          <div>
            <h3>16+</h3>
            <p>Years of Experience</p>
          </div>
        </div>
      </div>
      <div>
        <img src="/public/assets/hero-image.png" alt="Hero Image" />
      </div>
    </div>
  );
};
export default Hero;
