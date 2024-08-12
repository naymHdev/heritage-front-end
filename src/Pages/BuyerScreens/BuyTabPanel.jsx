/* eslint-disable react/no-unescaped-entities */
import { CiSearch, CiLocationOn } from "react-icons/ci";
import { RiHomeSmileLine } from "react-icons/ri";
import { BsCurrencyDollar } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useFilterProperty } from "../../Context/PropertyContext";
import useAllProperty from "../../Hooks/useAllProperty";

const BuyTabPanel = () => {
  const [allProperty] = useAllProperty();

  const {
    searchQuery,
    handleSearch,
    locationFilter,
    handleLocationChange,
    propertyTypeFilter,
    handlePropertyTypeChange,
    budgetFilter,
    handleBudgetChange,
  } = useFilterProperty();

  return (
    <div className="mt-8">
      <div className="relative">
        <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
          <CiSearch className="text-xl" />
        </span>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search properties"
          className="py-2 pl-10 pr-4 block w-full border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-[#055BB2] focus:border-[#055BB2] sm:text-sm"
        />
      </div>
      <div className="mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div>
            <div className="flex items-center gap-1">
              <CiLocationOn className="text-xl text-[#F24822]" />
              <h3 className="font-medium">Your Location</h3>
            </div>
            <div className="mt-3 w-full bg-[#ECF5FF] rounded-md px-3">
              <select
                className="w-full bg-[#ECF5FF] p-3 border-none focus:outline-none"
                value={locationFilter}
                onChange={handleLocationChange}
              >
                <option value="">Select your location</option>
                {allProperty?.map((itm) => (
                  <option key={itm._id} value={itm?.location}>
                    {itm?.location}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1">
              <RiHomeSmileLine className="text-xl text-[#F24822]" />
              <h3 className="font-medium">Property Type</h3>
            </div>
            <div className="mt-3 w-full bg-[#ECF5FF] rounded-md px-3">
              <select
                className="w-full bg-[#ECF5FF] p-3 border-none focus:outline-none"
                value={propertyTypeFilter}
                onChange={handlePropertyTypeChange}
              >
                <option value="">Select your property</option>
                <option value="Apartment">Apartment</option>
                <option value="Villa">Villa</option>
                <option value="Cottage">Cottage</option>
                <option value="Condo">Condo</option>
                <option value="Cabin">Cabin</option>
                <option value="Bungalow">Bungalow</option>
                <option value="Lodge">Lodge</option>
                <option value="Estate">Estate</option>
                <option value="Loft">Loft</option>
                <option value="Beach House">Beach House</option>
              </select>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1">
              <BsCurrencyDollar className="text-xl bg-[#F24822] text-white rounded-full" />
              <h3 className="font-medium">Budget</h3>
            </div>
            <div className="mt-3 w-full bg-[#ECF5FF] rounded-md px-3">
              <input
                className="w-full bg-[#ECF5FF] p-[10px] border-none focus:outline-none"
                type="text"
                placeholder="$$$"
                value={budgetFilter}
                onChange={handleBudgetChange}
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Link to="/searchResult">
          <div className="flex mt-8 w-full pb-3">
            <button className="font-medium w-full flex items-center justify-center gap-3 bg-[#055AB1] hover:bg-[#3178c0] text-[#f2f4f7] rounded-md px-6 py-3">
              <FiSearch className="text-xl" />
              Find Property
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BuyTabPanel;
