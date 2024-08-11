import { IoBatteryCharging } from "react-icons/io5";
import { GiLift } from "react-icons/gi";
import { FaWarehouse, FaWifi } from "react-icons/fa";
import { CgGym } from "react-icons/cg";
import { PiParkBold } from "react-icons/pi";
import { MdOutlineDepartureBoard, MdOutlineFilePresent } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import { LuGlassWater, LuForklift } from "react-icons/lu";
import { FaTreeCity } from "react-icons/fa6";
import { CiParking1 } from "react-icons/ci";
import { SiIntercom } from "react-icons/si";
import { GiCrescentStaff } from "react-icons/gi";
import { GiWaterfall } from "react-icons/gi";
import { GiMissileLauncher } from "react-icons/gi";
import { PiTelevision } from "react-icons/pi";
import { GiCelebrationFire } from "react-icons/gi";
import { GrRun } from "react-icons/gr";
import { MdOutlineSportsTennis } from "react-icons/md";
import { PiGraduationCapBold } from "react-icons/pi";
import { GiKidSlide } from "react-icons/gi";
import { MdSportsKabaddi } from "react-icons/md";

const Amenities = () => {
  return (
    <>
      <div className="bg-[#F9FAFB] rounded-md p-6">
        <h2 className=" text-xl font-medium">Amenities</h2>
        <div className=" grid grid-cols-2 md:grid-cols-4 gap-8 mt-6 text-sm hover:cursor-pointer">
          <div className="flex item-center gap-2">
            <IoBatteryCharging className=" text-2xl" />
            <p>Power Back Up</p>
          </div>
          <div className="flex item-center gap-2">
            <GiLift className=" text-2xl" />
            <p>Lift</p>
          </div>
          <div className="flex item-center gap-2">
            <FaWarehouse className=" text-2xl" />
            <p>Club House</p>
          </div>
          <div className="flex item-center gap-2">
            <CgGym className=" text-2xl" />
            <p>Gymnasium</p>
          </div>
          <div className="flex item-center gap-2">
            <PiParkBold className=" text-2xl" />
            <p>Park</p>
          </div>
          <div className="flex item-center gap-2">
            <MdOutlineDepartureBoard className=" text-2xl" />
            <p>Reserved Parking</p>
          </div>
          <div className="flex item-center gap-2">
            <RiSecurePaymentLine className=" text-2xl" />
            <p>Security</p>
          </div>
          <div className="flex item-center gap-2">
            <LuGlassWater className=" text-2xl" />
            <p>Water Storage</p>
          </div>
          <div className="flex item-center gap-2">
            <FaTreeCity className=" text-2xl" />
            <p>Private Terrace/Garden</p>
          </div>
          <div className="flex item-center gap-2">
            <MdOutlineFilePresent className=" text-2xl" />
            <p>Vaastu Compliant</p>
          </div>
          <div className="flex item-center gap-2">
            <LuForklift className=" text-2xl" />
            <p>Service/Goods Lift</p>
          </div>
          <div className="flex item-center gap-2">
            <CiParking1 className=" text-2xl" />
            <p>Visitor Parking</p>
          </div>
          <div className="flex item-center gap-2">
            <SiIntercom className=" text-2xl" />
            <p>Intercom Facility</p>
          </div>
          <div className="flex item-center gap-2">
            <GiCrescentStaff className=" text-2xl" />
            <p>Maintenance Staff</p>
          </div>
          <div className="flex item-center gap-2">
            <GiWaterfall className=" text-2xl" />
            <p>Waste Disposal</p>
          </div>
          <div className="flex item-center gap-2">
            <GiMissileLauncher className=" text-2xl" />
            <p>Laundry Service</p>
          </div>
          <div className="flex item-center gap-2">
            <FaWifi className=" text-2xl" />
            <p>Internet/Wi-Fi Connectivity</p>
          </div>
          <div className="flex item-center gap-2">
            <PiTelevision className=" text-2xl" />
            <p>DTH Television Facility</p>
          </div>
          <div className="flex item-center gap-2">
            <GiCelebrationFire className=" text-2xl" />
            <p>Piped Gas</p>
          </div>
          <div className="flex item-center gap-2">
            <GrRun className=" text-2xl" />
            <p>Jogging and Strolling Track</p>
          </div>
          <div className="flex item-center gap-2">
            <MdOutlineSportsTennis className=" text-2xl" />
            <p>Outdoor Tennis Courts</p>
          </div>
          <div className="flex item-center gap-2">
            <PiGraduationCapBold className=" text-2xl" />
            <p>Early Learning Centre</p>
          </div>
          <div className="flex item-center gap-2">
            <GiKidSlide className=" text-2xl" />
            <p>Kids Play Area</p>
          </div>
          <div className="flex item-center gap-2">
            <MdSportsKabaddi className=" text-2xl" />
            <p>Indoor Squash & Badminton Courts</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Amenities;
