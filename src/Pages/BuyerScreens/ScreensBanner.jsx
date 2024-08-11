import bannerImage from "../../assets/search-banner.jpeg";
import { Tab } from "@headlessui/react";
import BuyTabPanel from "./BuyTabPanel";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ScreensBanner = () => {
  return (
    <>
      <div>
        <div className="">
          <div>
            <img
              className="h-[50vh] w-full"
              src={bannerImage}
              alt="Banner Images"
            />
          </div>
          {/* Tabs */}
          <div className=" relative w-full bg-white text-black rounded-md shadow-md px-5 py-5 md:w-8/12 mx-auto -mt-32 md:-mt-24 lg:-mt-[230px] z-10">
            <div className="w-full">
              <Tab.Group>
                <Tab.List className=" flex items-center gap-8 font-medium  border-b-2 border-[#F1F7FF]">
                  <Tab
                    className={({ selected }) =>
                      classNames(
                        " focus:outline-none",
                        selected ? " border-b-2 border-[#055BB2]" : ""
                      )
                    }
                  >
                    Buy
                  </Tab>
                  <Tab
                    className={({ selected }) =>
                      classNames(
                        " focus:outline-none",
                        selected ? " border-b-2 border-[#055BB2]" : ""
                      )
                    }
                  >
                    Rent
                  </Tab>
                  <Tab
                    className={({ selected }) =>
                      classNames(
                        " focus:outline-none",
                        selected ? " border-b-2 border-[#055BB2]" : ""
                      )
                    }
                  >
                    PG
                  </Tab>
                  <Tab
                    className={({ selected }) =>
                      classNames(
                        " focus:outline-none",
                        selected ? " border-b-2 border-[#055BB2]" : ""
                      )
                    }
                  >
                    Plot
                  </Tab>
                  <Tab
                    className={({ selected }) =>
                      classNames(
                        " focus:outline-none",
                        selected ? " border-b-2 border-[#055BB2]" : ""
                      )
                    }
                  >
                    Commercial
                  </Tab>
                </Tab.List>
                <Tab.Panels className="mt-2">
                  <Tab.Panel>
                    <BuyTabPanel />
                  </Tab.Panel>
                  <Tab.Panel>
                    <BuyTabPanel />
                  </Tab.Panel>
                  <Tab.Panel>
                    <BuyTabPanel />
                  </Tab.Panel>
                  <Tab.Panel>
                    <BuyTabPanel />
                  </Tab.Panel>
                  <Tab.Panel>
                    <BuyTabPanel />
                  </Tab.Panel>
                </Tab.Panels>
              </Tab.Group>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScreensBanner;
