/* eslint-disable react/prop-types */
import { TfiLocationPin } from "react-icons/tfi";
import { LiaBedSolid } from "react-icons/lia";
import { MdBathtub, MdBalcony } from "react-icons/md";
import { GiFinishLine } from "react-icons/gi";
import { Steps, Popover } from "antd";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const customDot = (dot, { status, index }) => (
  <Popover
    content={
      <span>
        step {index} status: {status}
      </span>
    }
  >
    {dot}
  </Popover>
);

const DetailsCard = ({ detail }) => {
  const { images, price, location, property_name, details } = detail || {};
  const different = price + 10;

  console.log(images[1].image2);

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-7 gap-5 mt-5">
        <div className="md:col-span-5">
          <div className=" flex items-center justify-between w-full border-b-2 pb-2 ">
            <div>
              <h3 className=" text-xl font-semibold">{property_name}</h3>
              <div className=" flex items-center gap-2 font-medium mt-2">
                <TfiLocationPin className="text-[#EE6612]" />
                <p className=" text-sm text-slate-400">{location}</p>
              </div>
            </div>
            <div>
              <p className=" text-center text-2xl font-extrabold">${price}K</p>
            </div>
          </div>
          {/* Image */}
          <div className=" mt-5">
            <div>
              {images?.map((img, index) => (
                <div key={index}>
                  <img className="w-full rounded-md" src={img?.image1} alt="" />
                </div>
              ))}
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-3 gap-2">
              {images?.map((img, idx) => (
                <div key={idx} className=" mt-4">
                  <img className=" rounded-md" src={img.image1} alt="" />
                  <img className=" rounded-md" src={img.image2} alt="" />
                  <img className=" rounded-md" src={img.image3} alt="" />
                </div>
              ))}
            </div>
          </div>
          {/* Overview */}
          <div className="bg-[#F9FAFB] mt-8 p-8 border rounded-md shadow-md">
            <h2 className=" text-2xl font-medium">Overview</h2>
            <div className=" bg-[#FFFFFF] rounded-md shadow-md p-5 md:flex space-y-3 md:space-y-0 items-center justify-evenly mt-5">
              <div className=" flex items-center justify-center gap-2">
                <LiaBedSolid className=" text-xl" />
                <p className=" flex items-center gap-1">
                  {details?.bedrooms}
                  <span className=" text-gray-400 font-thin">Beds</span>
                </p>
              </div>
              <div className=" flex items-center justify-center gap-2">
                <MdBathtub className=" text-xl" />
                <p className=" flex items-center gap-1">
                  {details?.bathrooms}
                  <span className=" text-gray-400 font-thin">Bath</span>
                </p>
              </div>
              <div className=" flex items-center justify-center gap-2">
                <MdBalcony className=" text-xl" />
                <p className=" flex items-center gap-1">
                  {details?.bedrooms}
                  <span className=" text-gray-400 font-thin">Balcony</span>
                </p>
              </div>
              <div className=" flex items-center justify-center gap-2">
                <GiFinishLine className=" text-xl" />
                <p className=" flex items-center gap-1">
                  <span className=" text-gray-400 font-thin">
                    Fully Furnished
                  </span>
                </p>
              </div>
            </div>
            <div className="mt-10 grid grid-cols-7">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 col-span-6">
                <div>
                  <div className=" space-y-1">
                    <p className=" font-medium text-gray-500">Carpet Area</p>
                    <p className=" font-bold">{details?.carpet_area} sqft</p>
                    <p className=" font-medium text-gray-500">$ 225/sqft</p>
                  </div>
                  <div className=" mt-5">
                    <p className=" font-medium text-gray-500">Facing</p>
                    <p className=" font-bold">{details?.facing}</p>
                  </div>
                </div>
                <div>
                  <div className=" space-y-1">
                    <p className=" font-medium text-gray-500">Floor</p>
                    <p className=" font-bold">
                      {details?.floor} (Out of 6th floor)
                    </p>
                  </div>
                  <div className=" mt-12">
                    <p className=" font-medium text-gray-500">
                      Additional Rooms
                    </p>
                    <p className=" font-medium">{details?.additional_rooms}</p>
                  </div>
                </div>
                <div>
                  <div className=" space-y-1">
                    <p className=" font-medium text-gray-500">
                      Transaction Type
                    </p>
                    <p className=" font-bold">{details?.transaction_type}</p>
                  </div>
                  <div className=" mt-12">
                    <p className=" font-medium text-gray-500">
                      Age of construction
                    </p>
                    <p className=" font-bold">
                      {details?.age_of_construction} Year of Construction
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <p>Lift 1</p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-span-2">
          <div className="bg-[#ECF5FF] rounded-md p-5 mt-[85px]">
            <p>property value</p>
            <div className=" font-semibold flex items-center gap-2 text-xl mt-2">
              <p>${price}K</p> - <p>${different}K</p>
            </div>
            <p className=" text-sm text-gray-500 mt-4">
              Your bid can not be than 10% of the property Minimum value.
            </p>
            <div className=" mt-8 grid space-y-3">
              <div className=" grid space-y-2">
                <label className=" label">Min</label>
                <input
                  className=" px-3 py-2 rounded-md shadow-sm border-hidden focus:outline-none"
                  type="number"
                  name=""
                  id=""
                  placeholder="$280K"
                />
              </div>
              <div className=" grid space-y-2">
                <label className=" label">Max</label>
                <input
                  className=" px-3 py-2 rounded-md shadow-sm border-hidden focus:outline-none"
                  type="number"
                  name=""
                  id=""
                  placeholder="$305K"
                />
              </div>
            </div>
            <div className=" mt-6 w-full">
              <Steps
                current={2}
                progressDot={customDot}
                items={[
                  {
                    title: "$280K",
                  },
                  {
                    title: "$280K",
                  },
                ]}
              />
            </div>
            <div className="flex items-center justify-center">
              <button className="bg-[#055AB1] rounded-md mt-8 text-white px-6 py-3">
                Bid Property
              </button>
            </div>
          </div>
          {/* Google Map */}
          <div>
            <section className=" mt-12">
              <div style={{ height: "70vh", width: "100%" }}>
                <GoogleMapReact
                  bootstrapURLKeys={{ key: "" }}
                  defaultCenter={defaultProps.center}
                  defaultZoom={defaultProps.zoom}
                >
                  <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text="My Marker"
                  />
                </GoogleMapReact>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsCard;
