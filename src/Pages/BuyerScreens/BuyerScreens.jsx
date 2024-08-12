import { Helmet } from "react-helmet";
import PopularProperties from "../../Components/PopularProperties/PopularProperties";
import Stats from "../../Components/States/Stats";
import Testimonials from "../../Components/Testimonials/Testimonials";
import ScreensBanner from "./ScreensBanner";

const BuyerScreens = () => {
  return (
    <>
      <Helmet>
        <title>Nest Nestle || Buyer Screens</title>
      </Helmet>
      <ScreensBanner />
      <Stats />
      <PopularProperties />
      <div>
        <h3 className=" text-center mt-16 text-5xl font-semibold">
          Testimonials
        </h3>
      </div>
      {/* <Testimonials /> */}
    </>
  );
};

export default BuyerScreens;
