import { Outlet } from "react-router-dom";
import Sidebar from "../Pages/ManageRentals/Sidebar/Sidebar";

const RentalsLayout = () => {
  return (
    <>
      <div>
        <Sidebar />
        <div className="md:pl-[300px] px-4 max-w-7xl mx-auto bg-[#ECF5FF] py-8">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default RentalsLayout;
