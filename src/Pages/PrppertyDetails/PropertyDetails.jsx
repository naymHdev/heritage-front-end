import { useParams } from "react-router-dom";
import useAllProperty from "../../Hooks/useAllProperty";
import DetailsCard from "./DetailsCard";
import Amenities from "./Amenities ";
import OtherServices from "../Home/OtherServices";
import NewProperties from "../../Components/PopularProperties/NewProperties";
import { Helmet } from "react-helmet";

const PropertyDetails = () => {
  const [allProperty] = useAllProperty();

  const { id } = useParams();
  const details = allProperty?.filter((itm) => itm.id == id);

  return (
    <>
      <Helmet>
        <title>Nest Nestle || Property Details</title>
      </Helmet>
      <div className=" w-11/12 mx-auto">
        <div>
          {details?.map((detail) => (
            <DetailsCard key={detail?.id} detail={detail} />
          ))}
        </div>
      </div>
      <div className=" w-11/12 mx-auto mt-16">
        <Amenities />
      </div>
      <OtherServices />
      <NewProperties />
    </>
  );
};

export default PropertyDetails;
