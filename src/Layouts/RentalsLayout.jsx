import { Outlet } from "react-router-dom";
import Sidebar from "../Pages/ManageRentals/Sidebar/Sidebar";

const RentalsLayout = () => {
  return (
    <>
      <div>
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default RentalsLayout;
