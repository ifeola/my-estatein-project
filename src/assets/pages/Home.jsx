import CTA from "../components/CTA";
import FAQs from "../components/FAQs";
import Hero from "../components/Hero";
import Properties from "../components/Properties";
import Property from "../components/Property";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <section>
      <Hero />
      <Property />
      <Properties />
      <Testimonials />
      <FAQs />
      <CTA />
    </section>
  );
};
export default Home;
