import { useState } from "react";
import { HiChartPie, HiShoppingBag, HiMenu } from "react-icons/hi";
import { IoHomeSharp } from "react-icons/io5";
import useUser from "../../../Hooks/useUser";
import { GrGroup } from "react-icons/gr";
import { GiSpookyHouse } from "react-icons/gi";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const { getRole } = useUser();
  // console.log("role__", getRole?.roles);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex">
      {/* Sidebar for mobile devices */}
      <div
        className={`fixed inset-0 z-40 bg-gray-800 bg-opacity-75 transition-opacity ${
          isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        } md:hidden`}
        onClick={handleSidebarToggle}
      ></div>
      <aside
        className={`fixed top-0 left-0 z-50 w-64 bg-[#ECF5FF] h-full shadow-lg transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:w-64`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-semibold">
            Heritage Nest <span className=" text-sm">({getRole?.roles})</span>
          </h2>

          <button
            className="text-gray-600 md:hidden"
            onClick={handleSidebarToggle}
          >
            <HiMenu className="text-2xl" />
          </button>
        </div>
        <div className="p-4">
          <form className="mb-4 md:hidden">
            <input
              type="search"
              placeholder="Search"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </form>
          <nav>
            <ul className="space-y-2">
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
                  <li>
                    <a
                      href="/addProperties"
                      className="flex items-center p-2 text-gray-900 hover:bg-gray-200 rounded-md"
                    >
                      <HiShoppingBag className="mr-2 text-xl" /> Add Properties
                    </a>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </aside>
      {/* Main content */}
      <main className="flex-1 p-4">
        <button
          className="md:hidden p-2 mb-4 bg-blue-500 text-white rounded-md"
          onClick={handleSidebarToggle}
        >
          <HiMenu className="text-2xl" />
        </button>
        {/* Your main content goes here */}
      </main>
    </div>
  );
};

export default Sidebar;
