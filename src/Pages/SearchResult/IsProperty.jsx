/* eslint-disable react/prop-types */
import { useState } from "react";
import PropertyCard from "./PropertyCard";
import { Pagination } from "antd";

const IsProperty = ({ allProperty }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const newProject = allProperty.filter(
    (itm) => itm?.category === "New_Projects"
  );
  const preLaunch = allProperty.filter(
    (itm) => itm?.category === "Pre_launch_offers"
  );

  // Calculate start and end indexes for pagination
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProperties = allProperty.slice(startIndex, endIndex);

  return (
    <>
      <div>
        <div className=" flex flex-wrap items-center gap-2 md:gap-5">
          <button className="bg-[#055AB1] text-white font-medium px-4 py-2 rounded-md">
            properties ({allProperty?.length})
          </button>
          <button className="bg-[#ADD7FE] text-[#4B5563] font-medium px-4 py-2 rounded-md">
            New Projects ({newProject?.length})
          </button>
          <button className="bg-[#ADD7FE] text-[#4B5563] font-medium px-4 py-2 rounded-md">
            Pre-launch offers ({preLaunch?.length})
          </button>
        </div>
        <hr className=" mt-4 md:w-6/12" />
        <h3 className=" text-xl font-medium mt-5">
          {allProperty?.length} results for rental property
        </h3>
        <div>
          {currentProperties?.map((property) => (
            <PropertyCard key={property?.id} property={property} />
          ))}
        </div>
        <hr className=" mt-5 mb-5 w-8/12" />
        <Pagination
          current={currentPage}
          pageSize={itemsPerPage}
          total={allProperty.length}
          onChange={handlePageChange}
          showSizeChanger={false}
          showQuickJumper={true}
        />
      </div>
    </>
  );
};

export default IsProperty;
