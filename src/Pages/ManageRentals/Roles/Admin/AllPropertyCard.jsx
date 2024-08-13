/* eslint-disable react/prop-types */
import { TfiLocationPin } from "react-icons/tfi";
import { PiSpinnerGapBold } from "react-icons/pi";
import { GrStatusInfo } from "react-icons/gr";
import { GiSquare } from "react-icons/gi";
import { Link } from "react-router-dom";

const AllPropertyCard = ({ property }) => {
  const { images, price, location, property_name, details, _id } =
    property || {};

  return (
    <>
      <Link to={`/propertyDetails/${_id}`}>
        <div className=" md:placeholder md:flex md:gap-8 bg-[#F9FAFB] md:p-6 p-2 mt-5 rounded-md w-full shadow-sm">
          <div className="">
            <div className="bg-[#F9FAFB] flex items-center justify-center">
              <div style={{ height: "220px" }}>
                <img
                  className="w-full h-full rounded-md"
                  src={images[1].image2}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className=" w-full">
            <div className=" flex items-center justify-between w-full ">
              <div>
                <h3 className=" text-xl font-semibold">{property_name}</h3>
                <div className=" flex items-center gap-2 font-medium mt-5">
                  <TfiLocationPin className="text-[#EE6612]" />
                  <p className=" text-sm text-slate-400">{location}</p>
                </div>
              </div>
              <div>
                <p className=" text-center text-2xl font-extrabold mt-2 md:mt-0">
                  ${price}
                </p>
              </div>
            </div>
            {/* Details */}
            <div className=" mt-5">
              <div className="flex items-center gap-2 ">
                <div>
                  <h3 className=" font-medium">Property details</h3>
                </div>
                <div className=" border-b-2 lg:w-9/12 w-6/12" />
              </div>
              <div className="mt-4 lg:flex space-y-4 lg:space-y-0 items-center justify-between">
                <div className=" flex items-center gap-3">
                  <div className="bg-[#EE6612] rounded-md p-1">
                    <PiSpinnerGapBold className=" text-2xl text-white" />
                  </div>
                  <div>
                    <h3 className=" font-medium">Total Area</h3>
                    <p className="text-sm">
                      {details?.carpet_area} <span>sqft</span>
                    </p>
                  </div>
                </div>
                <div className=" flex items-center gap-3">
                  <div className="bg-[#EE6612] rounded-md p-1">
                    <GrStatusInfo className=" text-2xl text-white" />
                  </div>
                  <div>
                    <h3 className=" font-medium">Status</h3>
                    <p className="text-sm">Ready to move</p>
                  </div>
                </div>
                <div className=" flex items-center gap-3">
                  <div className="bg-[#EE6612] rounded-md p-1">
                    <GiSquare className=" text-2xl text-white" />
                  </div>
                  <div>
                    <h3 className=" font-medium">Construction Time</h3>
                    <p className="text-sm">
                      {details?.age_of_construction} <span>Year</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default AllPropertyCard;
