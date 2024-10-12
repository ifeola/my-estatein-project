import Title from "./Title";
import style from "../styles/faqs.module.css";
import Pagination from "./Pagination";
import FAQ from "./FAQ";

const data = [
  {
    title: "How do I search for properties on Estatein?",
    description:
      "Learn how to use our user-friendly search tools to find properties that match your criteria.",
  },
  {
    title: "What documents do I need to sell my property through Estatein?",
    description:
      "Find out about the necessary documentation for listing your property with us.",
  },
  {
    title: "How can I contact an Estatein agent?",
    description:
      "Discover the different ways you can get in touch with our experienced agents.",
  },
];

const FAQs = () => {
  return (
    <section className={style.faqs}>
      <Title
        icon={true}
        content="Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs."
        title="What Our Clients Say"
        desc={{
          bgColor: false,
          border: true,
          content: "View All FAQs",
        }}
      />

      <div>
        <div className={style.faqs__list}>
          {data.map((faq, index) => {
            return (
              <FAQ
                key={index}
                title={faq.title}
                description={faq.description}
              />
            );
          })}
        </div>
        <Pagination pages={10} />
      </div>
    </section>
  );
};
export default FAQs;
