import rHouse from "../../assets/about-home.jpeg";
import man1 from "../../assets/sm1.jpeg";
import man2 from "../../assets/sm2.jpeg";
import man3 from "../../assets/sm3.jpeg";
import ha1 from "../../assets/a-h1.jpeg";
import ha2 from "../../assets/ah2.jpeg";

const OurTeem = () => {
  return (
    <>
      <section className=" mt-20 w-10/12 mx-auto">
        <div>
          <div>
            <img className=" w-10/12 h-[455px]" src={ha1} alt="" />
          </div>
          <div className=" flex items-center justify-end">
            <div className="bg-[#ECF5FF] px-8 py-8 text-start w-7/12 relative -mt-36">
              <div className=" text-[#EE6612] font-medium flex items-center gap-2">
                <div>
                  <div className=" border-b-2 border-[#EE6612] w-12" />
                </div>
                <h4>Our Story</h4>
              </div>
              <h2 className=" mt-4 text-3xl font-bold text-start">
                Efficient and Transparent Home Buying Solutions
              </h2>
              <p className=" mt-6">
                In the symphony of bustling markets and serene landscapes,
                Heritage-Nest was born—a vision to
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className=" mt-20 w-10/12 mx-auto">
        <div>
          <div className=" flex items-end justify-end mr-10">
            <img className=" w-9/12 h-[455px]" src={ha2} alt="" />
          </div>
          <div className=" flex items-center justify-start">
            <div className="bg-[#FDF0E7] px-8 py-8 text-start w-7/12 relative -mt-28">
              <div className=" text-[#EE6612] font-medium flex items-center gap-2">
                <div>
                  <div className=" border-b-2 border-[#EE6612] w-12" />
                </div>
                <h4>Mission Statement</h4>
              </div>
              <h2 className=" mt-4 text-3xl font-bold text-start">
                Efficient and Transparent Home Buying Solutions
              </h2>
              <p className=" mt-6 text-gray-500">
                To bridge the miles with smiles, Heritage-Nest pledges to be the
                golden thread connecting NRIs to their homeland, through trust,
                transparency, and tailored real estate solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="w-11/12 mx-auto mt-32">
        <div className=" text-[#EE6612] font-medium flex items-center gap-2 mt-20">
          <div>
            <div className=" border-b-2 border-[#EE6612] w-12" />
          </div>
          <h4>Our Teem</h4>
        </div>
        <h2 className=" mt-4 text-3xl font-bold">
          Discover the Faces Behind Our Success
        </h2>
        <div className=" mt-12">
          <div className=" grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <img className=" w-[384px] h-[417px]" src={man1} alt="" />
            </div>
            <div>
              <img className=" w-[384px] h-[417px]" src={man2} alt="" />
            </div>
            <div>
              <img className=" w-[384px] h-[417px]" src={man3} alt="" />
            </div>
          </div>
        </div>
        <div className=" mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-32">
          <div>
            <div className=" text-[#EE6612] font-medium flex items-center gap-2">
              <div>
                <div className=" border-b-2 border-[#EE6612] w-12" />
              </div>
              <h4>Meet the Team For Book Consultation</h4>
            </div>
            <div>
              <h2 className=" text-3xl font-bold mt-4">
                Meet the stewards of your heritage journey
              </h2>
              <p className=" text-gray-500 mt-6">
                each member an embodiment of expertise and warmth, dedicated to
                guiding you home, every step of the way.
              </p>
              <div className=" mt-12">
                <button className=" text-slate-50 bg-[#055AB1] rounded-md px-6 py-4">
                  Book Consultation Now
                </button>
              </div>
            </div>
          </div>
          <div className=" order-first md:order-last">
            <img className=" w-96 rounded-md" src={rHouse} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default OurTeem;
