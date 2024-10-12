import Title from "./Title";
import style from "../styles/testimonials.module.css";
import Pagination from "./Pagination";
import Testimonial from "./Testimonial";

const data = [
  {
    imgURL: "/assets/testimonial-1.png",
    title: "Exceptional Service!",
    description:
      "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
    name: "Wade Warren",
    location: "USA, California",
  },
  {
    imgURL: "/assets/testimonial-3.png",
    title: "Efficient and Reliable",
    description:
      "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
    name: "Emelie Thomson",
    location: "USA, Florida",
  },
  {
    imgURL: "/assets/testimonial-3.png",
    title: "Trusted Advisors",
    description:
      "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
    name: "John Mans",
    location: "USA, Nevada",
  },
];

const Testimonials = () => {
  return (
    <section className={style.testimonials}>
      <Title
        icon={true}
        content="Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs."
        title="What Our Clients Say"
        desc={{
          bgColor: false,
          border: true,
          content: "View All Testimonials",
        }}
      />

      <div>
        <div className={style.testimonials__list}>
          {data.map((testimonial, index) => {
            return (
              <Testimonial
                key={index}
                name={testimonial.name}
                description={testimonial.description}
                imgURL={testimonial.imgURL}
                title={testimonial.title}
                location={testimonial.location}
              />
            );
          })}
        </div>
        <Pagination pages={10} />
      </div>
    </section>
  );
};
export default Testimonials;
