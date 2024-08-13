import { useParams } from "react-router-dom";
import DetailsCard from "./DetailsCard";
import Amenities from "./Amenities ";
import OtherServices from "../Home/OtherServices";
import NewProperties from "../../Components/PopularProperties/NewProperties";
import { Helmet } from "react-helmet";
import { useFilterProperty } from "../../Context/PropertyContext";
import GetReviews from "./GetReviews";

const PropertyDetails = () => {
  const { filteredProperty } = useFilterProperty();
  const { _id } = useParams();
  const details = filteredProperty?.filter((itm) => itm._id == _id);

  return (
    <>
      <Helmet>
        <title>Nest Nestle || Property Details</title>
      </Helmet>
      <div className=" w-11/12 mx-auto">
        <div>
          {details?.map((detail) => (
            <DetailsCard key={detail?._id} detail={detail} />
          ))}
        </div>
      </div>
      <div className=" w-11/12 mx-auto mt-16">
        <Amenities />
      </div>
      <section className="grid grid-cols-1 md:grid-cols-7 gap-5 mt-16">
        <div className="md:col-span-5 col-span-full">
          <GetReviews />
        </div>
        <div className="md:col-span-2 col-span-full"></div>
      </section>
      <OtherServices />
      <NewProperties />
    </>
  );
};

export default PropertyDetails;
