import IsProperty from "../../Hooks/IsProperty";
import propertyImage1 from "../../assets/property - 1.jpeg";
import propertyImage2 from "../../assets/property - 2.jpeg";
import living1 from "../../assets/living-room-1.jpeg";
import living2 from "../../assets/modarn-interior.jpeg";
import second1 from "../../assets/2nd1.jpeg";
import second2 from "../../assets/2nd2.jpeg";
import FindButton from "../../Hooks/FindButton";
import videoIcon from "../../assets/Group 27.png";

const FindProperty = () => {
  return (
    <>
      <div className=" mt-20 w-11/12 mx-auto">
        <IsProperty
          image1={propertyImage1}
          image2={propertyImage2}
          name="Property buying"
          title="Efficient and Transparent Home Buying Solutions"
          description=" It is a long established fact that a reader will be distracted by
          the readable content of a page when looking at its layout."
        />
        <div>
          <div className="grid md:flex gap-8 mt-20">
            <div className=" flex-1">
              <h4 className=" text-[#F06711] text-[18px]">Property buying</h4>
              <h2 className=" text-[#111827] text-5xl mt-5 font-semibold">
                Efficient and Transparent Home Buying Solutions
              </h2>
              <p className=" text-sm mt-6">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
              <div className=" mt-5 ">
                <FindButton />
              </div>
            </div>
            <div className=" flex-1 relative">
              <div className=" absolute ml-24">
                <img
                  className="w-[452px] h-[240px] rounded-md"
                  src={second2}
                  alt=""
                />
              </div>
              <div>
                <img
                  className="w-[458px] h-[400px] rounded-md mt-28"
                  src={second1}
                  alt=""
                />
              </div>
              <div className="absolute right-[420px] top-[80px]">
                <img
                  className=" w-[72px] h-[72px]"
                  src={videoIcon}
                  alt="Video Icon"
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-20">
          <IsProperty
            image1={living1}
            image2={living2}
            name="Property buying"
            title="Efficient and Transparent Home Buying Solutions"
            description=" It is a long established fact that a reader will be distracted by
          the readable content of a page when looking at its layout."
          />
        </div>
      </div>
    </>
  );
};

export default FindProperty;
