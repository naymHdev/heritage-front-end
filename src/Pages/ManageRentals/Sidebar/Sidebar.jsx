import { useState } from "react";
import { HiChartPie, HiMenu } from "react-icons/hi";
import { IoHomeSharp } from "react-icons/io5";
import useUser from "../../../Hooks/useUser";
import { GrGroup } from "react-icons/gr";
import { GiSpookyHouse } from "react-icons/gi";
import { MdAdd } from "react-icons/md";
import logo from "../../../assets/Hertiage Nest - Final LOGO (1) 1.png";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const { getRole } = useUser();
  // console.log("role__", getRole?.roles);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex absolute">
      {/* Sidebar for mobile devices */}
      <div
        className={`fixed inset-0 z-40 bg-gray-800 bg-opacity-75 transition-opacity ${
          isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        } md:hidden`}
        onClick={handleSidebarToggle}
      ></div>
      <aside
        className={`fixed top-0 left-0 z-50 w-64 bg-white h-full shadow-lg transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:w-64`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <div className=" flex flex-col items-center justify-center">
            <img className="h-16 w-auto" src={logo} alt="" />
            <h2 className="text-3xl mt-1 font-semibold text-center">
              Heritage Nest
            </h2>
            <p className=" text-sm font-medium mt-1 text-gray-600">
              {getRole?.roles}
            </p>
          </div>
          {/* <button
            className="text-gray-600 md:hidden"
            onClick={handleSidebarToggle}
          >
            <HiMenu className="text-2xl" />
          </button> */}
        </div>
        <div className="p-4">
          <nav className=" mt-3">
            <ul className="space-y-3">
              <li>
                <a
                  href="/"
                  className="flex items-center p-2 text-gray-900 hover:bg-gray-200 rounded-md"
                >
                  <IoHomeSharp className="mr-2 text-xl" /> Home
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="flex items-center p-2 text-gray-900 hover:bg-gray-200 rounded-md"
                >
                  <HiChartPie className="mr-2 text-xl" /> Dashboard
                </a>
              </li>
            </ul>
            <ul className="space-y-2">
              {getRole?.roles == "admin" && (
                <>
                  <li>
                    <a
                      href="/allUsers"
                      className="flex items-center p-2 text-gray-900 hover:bg-gray-200 rounded-md"
                    >
                      <GrGroup className="mr-2 text-xl" /> Manages Users
                    </a>
                  </li>
                  <li>
                    <a
                      href="/manageProperties"
                      className="flex items-center p-2 text-gray-900 hover:bg-gray-200 rounded-md"
                    >
                      <GiSpookyHouse className="mr-2 text-xl" /> Manage
                      Properties
                    </a>
                  </li>
                </>
              )}

              {/* Property owners menus */}
              {getRole?.roles == "propertyOwner" && (
                <>
                  <li className=" mt-2">
                    <a
                      href="/addProperties"
                      className="flex items-center p-2 text-gray-900 hover:bg-gray-200 rounded-md"
                    >
                      <MdAdd className="mr-2 text-xl" /> Add Properties
                    </a>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </aside>
      {/* Main content */}
      <main className="flex-1">
        <button
          className="md:hidden p-2 mb-4 rounded-md absolute top-[8px] left-[315px]"
          onClick={handleSidebarToggle}
        >
          <HiMenu className="text-3xl" />
        </button>
      </main>
    </div>
  );
};

export default Sidebar;
