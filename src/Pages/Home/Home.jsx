import { Helmet } from "react-helmet";
import Banner from "../../Components/Banner/Banner";
import FindProperty from "./FindProperty";
import OtherServices from "./OtherServices";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Nest Nestle || Home</title>
      </Helmet>
      <Banner />
      <FindProperty />
      <OtherServices />
    </>
  );
};

export default Home;
