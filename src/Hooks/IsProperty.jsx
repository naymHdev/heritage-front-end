/* eslint-disable react/prop-types */
import FindButton from "./FindButton";
import videoIcon from "../assets/Group 27.png";

const IsProperty = ({ image1, image2, title, description, name }) => {
  return (
    <>
      <div className="grid md:flex gap-8">
        <div className=" flex-1 relative order-last md:order-first">
          <div>
            <img
              className="w-[458px] h-[400px] rounded-md"
              src={image1}
              alt=""
            />
          </div>
          <div className=" -mt-36 ml-20">
            <img
              className="w-[452px] h-[240px] rounded-md"
              src={image2}
              alt=""
            />
          </div>
          <div className="absolute right-[54px] top-[230px]">
            <img
              className=" w-[72px] h-[72px]"
              src={videoIcon}
              alt="Video Icon"
            />
          </div>
        </div>
        <div className=" flex-1">
          <h4 className=" text-[#F06711] text-[18px]">{name}</h4>
          <h2 className=" text-[#111827] text-5xl mt-5 font-semibold">
            {title}
          </h2>
          <p className=" text-sm mt-6">{description}</p>
          <div className=" mt-5 ">
            <FindButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default IsProperty;
