import { RiHome3Line } from "react-icons/ri";

const OtherServices = () => {
  return (
    <>
      <div className=" mt-20 w-11/12 mx-auto">
        <h2 className=" text-4xl text-[#181818] font-bold text-center">
          Other Services
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className=" flex gap-4 bg-[#ECF5FF] rounded-md px-6 py-6 shadow-sm hover:cursor-pointer hover:shadow-2xl hover:-translate-y-4 transition-[0.5s]">
            <div>
              <div className="bg-[#EE6612] text-white p-2 rounded-md shadow-md">
                <RiHome3Line />
              </div>
            </div>
            <div>
              <h3 className=" text-2xl font-medium">
                Advanced Property Search
              </h3>
              <p className=" text-sm mt-3 text-slate-500">
                Effortlessly find your dream property with advanced search
                filters.
              </p>
            </div>
          </div>
          <div className=" flex gap-4 bg-[#ECF5FF] rounded-md px-6 py-6 shadow-sm hover:cursor-pointer hover:shadow-2xl hover:-translate-y-4 transition-[0.5s]">
            <div>
              <div className="bg-[#EE6612] text-white p-2 rounded-md shadow-md">
                <RiHome3Line />
              </div>
            </div>
            <div>
              <h3 className=" text-2xl font-medium">
                Virtual Tours and Multimedia
              </h3>
              <p className=" text-sm mt-3 text-slate-500">
                Explore properties through immersive virtual tours and HD
                photos.
              </p>
            </div>
          </div>
          <div className=" flex gap-4 bg-[#ECF5FF] rounded-md px-6 py-6 shadow-sm hover:cursor-pointer hover:shadow-2xl hover:-translate-y-4 transition-[0.5s]">
            <div>
              <div className="bg-[#EE6612] text-white p-2 rounded-md shadow-md">
                <RiHome3Line />
              </div>
            </div>
            <div>
              <h3 className=" text-2xl font-medium">
                Secure Online Transactions
              </h3>
              <p className=" text-sm mt-3 text-slate-500">
                Ensure secure transactions and e-sign documents seamlessly
                online.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OtherServices;
