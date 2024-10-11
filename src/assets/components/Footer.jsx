import { Link } from "react-router-dom";
import {
  Facebook,
  LinkedIn,
  Mail,
  Send,
  Twitter,
  YouTube,
} from "../utils/Icons";
import style from "../styles/Footer.module.css";

const data = {
  home: ["Hero Section", "Features", "Properties", "Testimonials", "FAQs"],
  about: ["Our Story", "Our Works", "How It Works", "Our Team", "Our Clients"],
  properties: ["Portfolio", "Categories"],
  services: [
    "Valuation Mastery",
    "Strategic Marketing",
    "Negotiation Wizardry",
    "Closing Success",
    "Property Management",
  ],
  contact: ["Contact Form", "Our Offices"],
};

const Footer = () => {
  return (
    <footer>
      <div className={style.container}>
        <div className={style.footer__nav}>
          <div className={style.footer__left}>
            <img
              src="/assets/Logo-footer.svg"
              alt="Footer Logo"
              className={style.footer__logo}
            />
            <label htmlFor="email">
              {Mail}
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email"
              />
              {Send}
            </label>
          </div>
          <div className={style.footer__links_container}>
            <div>
              <h6>Home</h6>
              <ul className={style.footer__links}>
                {data.home.map((item, index) => {
                  return <Link key={index}>{item}</Link>;
                })}
              </ul>
            </div>
            <div>
              <h6>About Us</h6>
              <ul className={style.footer__links}>
                {data.about.map((item, index) => {
                  return <Link key={index}>{item}</Link>;
                })}
              </ul>
            </div>
            <div>
              <h6>Properties</h6>
              <ul className={style.footer__links}>
                {data.properties.map((item, index) => {
                  return <Link key={index}>{item}</Link>;
                })}
              </ul>
            </div>
            <div>
              <h6>Services</h6>
              <ul className={style.footer__links}>
                {data.services.map((item, index) => {
                  return <Link key={index}>{item}</Link>;
                })}
              </ul>
            </div>
            <div>
              <h6>Contact Us</h6>
              <ul className={style.footer__links}>
                {data.contact.map((item, index) => {
                  return <Link key={index}>{item}</Link>;
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={style.footer__bottom}>
        <span>
          @<span>{new Date().getFullYear()}</span> Estatein. All Rights
          Reserved. Terms & Conditions
        </span>
        <div className={style.footer__socials}>
          <Link>{Facebook}</Link>
          <Link>{LinkedIn}</Link>
          <Link>{Twitter}</Link>
          <Link>{YouTube}</Link>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
