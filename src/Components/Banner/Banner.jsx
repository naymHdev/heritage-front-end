import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import video from "../../assets/banner.mp4";

const Banner = () => {
  return (
    <>
      <div className="relative h-[70vh]">
        <div className="absolute inset-0 bg-black opacity-80 z-10"></div>
        <div className="flex w-full flex-col h-full">
          <video
            className="w-full h-full object-cover z-0"
            src={video}
            autoPlay
            loop
            muted
          />
        </div>
        <div className="absolute top-[100px] w-full opacity-80 z-10">
          <div className="flex items-center justify-center">
            <div className="h-[50vh] flex flex-col justify-center items-center">
              <p className="text-white text-center text-sm -mt-12 w-1/2 md:w-full">
                Seamlessly connecting you to the heartbeat of India's prime
                properties.
              </p>
              <h2 className="text-3xl md:text-5xl text-white text-center mt-0 md:mt-8">
                Your Portal to India's
              </h2>
              <h2 className=" text-4xl md:text-5xl mt-0 md:mt-2 text-white text-center">
                Exquisite Real Estate
              </h2>
              <div className="flex items-center justify-center mt-5 md:mt-8">
                <Link to="/buyerScreens">
                  <button className="font-medium flex items-center justify-center gap-3 bg-[#055AB1] text-white rounded-md px-6 py-3">
                    <FiSearch className="text-xl" />
                    Find Property
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
