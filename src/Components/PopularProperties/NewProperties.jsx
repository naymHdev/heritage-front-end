/* eslint-disable react/prop-types */
import Slider from "react-slick";
import { FaRegSquare, FaImage } from "react-icons/fa";
import { TfiLocationPin } from "react-icons/tfi";
import useProperty from "../../Hooks/useProperty";
import { Link } from "react-router-dom";

const NewProperties = () => {
  const [isProperty] = useProperty();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="slider-container mt-12 w-11/12 mx-auto">
        <div className=" flex items-center justify-between mb-8">
          <h3 className=" text-3xl font-medium">Others Nearby Properties</h3>
          <Link to="/searchResult">
            <button className="font-bold underline text-[#055AB1]">
              See all propeety
            </button>
          </Link>
        </div>
        <Slider {...settings}>
          {isProperty.map((property) => (
            <div key={property.id} className="px-2 hover:cursor-pointer">
              <div className="bg-[#F9FAFB]">
                {property?.images?.map((img, index) => (
                  <div key={index}>
                    <img src={img?.image2} alt="" />
                  </div>
                ))}
              </div>
              <div className=" flex items-start justify-start absolute top-44 ml-6">
                <div className="bg-[#FDF0E7] flex items-center gap-2 rounded-md px-3 py-2">
                  <FaImage className=" text-xl text-[#EE6612]" />
                  <p className=" font-medium">20</p>
                </div>
              </div>
              <div className=" px-1 md:px-3 py-2 pt-4 bg-[#F9FAFB]">
                <div className=" flex items-center justify-between border-b-2 pb-1">
                  <div className=" bg-[#C5E2FE] rounded-xl px-3 py-2">
                    <p className=" font-medium">{property?.property_type}</p>
                  </div>
                  <div className=" flex items-center gap-1 md:gap-3">
                    <FaRegSquare className="text-[#EE6612] bg-[#EE6612] text-sm" />
                    <p className=" font-medium">Ready to Move</p>
                  </div>
                </div>
                <h2 className=" text-xl md:text-2xl mt-2 font-medium">
                  {property?.property_name}
                </h2>
                <div className=" flex items-center gap-2 font-medium mt-2">
                  <TfiLocationPin className="text-[#EE6612]" />
                  <p className=" text-sm text-slate-400">
                    {property?.location}
                  </p>
                </div>
                <p className=" text-xl font-semibold mt-5">
                  ${property?.price}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default NewProperties;
