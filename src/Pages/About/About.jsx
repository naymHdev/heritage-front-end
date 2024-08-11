import { Helmet } from "react-helmet";
import Stats from "../../Components/States/Stats";
import Testimonials from "../../Components/Testimonials/Testimonials";
import OurTeem from "./OurTeem";
import banner from "../../assets/about banner.jpeg";

const About = () => {
  return (
    <>
      <Helmet>
        <title>Nest Nestle || About Us</title>
      </Helmet>
      <div>
        <img
          className="w-full h-[320px] opacity-95 object-cover object-center"
          src={banner}
          alt="banner image"
        />
      </div>
      <div className=" w-11/12 mx-auto">
        <Stats />
        <OurTeem />
        <Testimonials />
      </div>
    </>
  );
};

export default About;
