/* eslint-disable react/no-unescaped-entities */
import r1 from "../../assets/r1.jpeg";
import r2 from "../../assets/r2.jpeg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Rate } from "antd";

const Testimonials = () => {
  return (
    <>
      <div>
        <Carousel autoPlay >
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 w-11/12 mx-auto">
            <div className="bg-[#ECF5FF] rounded-md px-8 py-8">
              <div className=" mt-2">
                <Rate allowHalf defaultValue={2.5} />
              </div>
              <p className=" text-sm text-center text-gray-500 mt-8">
                "The level of security provided by CypherPlay is unmatched. I
                feel confident using my card for both everyday purchases and
                travel. It's the peace of mind I was looking for."
              </p>
              <div className=" text-center mt-10">
                <div className=" flex items-center justify-center">
                  <div className=" w-12 flex items-center justify-center">
                    <img className=" rounded-full w-12" src={r1} alt="" />
                  </div>
                </div>
                <h3 className=" font-extrabold mt-2 mb-1">Tony Stark</h3>
                <p className=" text-sm text-gray-500">Marketing manager, XYZ</p>
              </div>
            </div>
            <div className="bg-[#ECF5FF] rounded-md px-8 py-8">
              <div className=" mt-2">
                <Rate allowHalf defaultValue={2.5} />
              </div>
              <p className=" text-sm text-center text-gray-500 mt-8">
                "The level of security provided by CypherPlay is unmatched. I
                feel confident using my card for both everyday purchases and
                travel. It's the peace of mind I was looking for."
              </p>
              <div className=" text-center mt-10">
                <div className=" flex items-center justify-center">
                  <div className=" w-12 flex items-center justify-center">
                    <img className=" rounded-full w-12" src={r2} alt="" />
                  </div>
                </div>
                <h3 className=" font-extrabold mt-2 mb-1">Tony Stark</h3>
                <p className=" text-sm text-gray-500">Marketing manager, XYZ</p>
              </div>
            </div>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 w-11/12 mx-auto">
            <div className="bg-[#ECF5FF] rounded-md px-8 py-8">
              <div className=" mt-2">
                <Rate allowHalf defaultValue={2.5} />
              </div>
              <p className=" text-sm text-center text-gray-500 mt-8">
                "The level of security provided by CypherPlay is unmatched. I
                feel confident using my card for both everyday purchases and
                travel. It's the peace of mind I was looking for."
              </p>
              <div className=" text-center mt-10">
                <div className=" flex items-center justify-center">
                  <div className=" w-12 flex items-center justify-center">
                    <img className=" rounded-full w-12" src={r1} alt="" />
                  </div>
                </div>
                <h3 className=" font-extrabold mt-2 mb-1">Tony Stark</h3>
                <p className=" text-sm text-gray-500">Marketing manager, XYZ</p>
              </div>
            </div>
            <div className="bg-[#ECF5FF] rounded-md px-8 py-8">
              <div className=" mt-2">
                <Rate allowHalf defaultValue={2.5} />
              </div>
              <p className=" text-sm text-center text-gray-500 mt-8">
                "The level of security provided by CypherPlay is unmatched. I
                feel confident using my card for both everyday purchases and
                travel. It's the peace of mind I was looking for."
              </p>
              <div className=" text-center mt-10">
                <div className=" flex items-center justify-center">
                  <div className=" w-12 flex items-center justify-center">
                    <img className=" rounded-full w-12" src={r2} alt="" />
                  </div>
                </div>
                <h3 className=" font-extrabold mt-2 mb-1">Tony Stark</h3>
                <p className=" text-sm text-gray-500">Marketing manager, XYZ</p>
              </div>
            </div>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 w-11/12 mx-auto">
            <div className="bg-[#ECF5FF] rounded-md px-8 py-8">
              <div className=" mt-2">
                <Rate allowHalf defaultValue={2.5} />
              </div>
              <p className=" text-sm text-center text-gray-500 mt-8">
                "The level of security provided by CypherPlay is unmatched. I
                feel confident using my card for both everyday purchases and
                travel. It's the peace of mind I was looking for."
              </p>
              <div className=" text-center mt-10">
                <div className=" flex items-center justify-center">
                  <div className=" w-12 flex items-center justify-center">
                    <img className=" rounded-full w-12" src={r1} alt="" />
                  </div>
                </div>
                <h3 className=" font-extrabold mt-2 mb-1">Tony Stark</h3>
                <p className=" text-sm text-gray-500">Marketing manager, XYZ</p>
              </div>
            </div>
            <div className="bg-[#ECF5FF] rounded-md px-8 py-8">
              <div className=" mt-2">
                <Rate allowHalf defaultValue={2.5} />
              </div>
              <p className=" text-sm text-center text-gray-500 mt-8">
                "The level of security provided by CypherPlay is unmatched. I
                feel confident using my card for both everyday purchases and
                travel. It's the peace of mind I was looking for."
              </p>
              <div className=" text-center mt-10">
                <div className=" flex items-center justify-center">
                  <div className=" w-12 flex items-center justify-center">
                    <img className=" rounded-full w-12" src={r2} alt="" />
                  </div>
                </div>
                <h3 className=" font-extrabold mt-2 mb-1">Tony Stark</h3>
                <p className=" text-sm text-gray-500">Marketing manager, XYZ</p>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default Testimonials;
