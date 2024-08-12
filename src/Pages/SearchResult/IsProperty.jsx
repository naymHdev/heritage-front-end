/* eslint-disable react/prop-types */
import { useState, useMemo } from "react";
import PropertyCard from "./PropertyCard";
import { Pagination } from "antd";
import { useFilterProperty } from "../../Context/PropertyContext";

const IsProperty = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("");

  const { filteredProperty } = useFilterProperty();

  // Filter properties based on selected category
  const categoryFilteredProperties = useMemo(() => {
    if (selectedCategory === "") return filteredProperty;
    return filteredProperty.filter(
      (property) => property.category === selectedCategory
    );
  }, [filteredProperty, selectedCategory]);

  // Calculate start and end indexes for pagination
  const itemsPerPage = 5;
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProperties = categoryFilteredProperties.slice(
    startIndex,
    endIndex
  );

  return (
    <>
      <div>
        <div className="flex flex-wrap items-center gap-2 md:gap-5">
          <button
            className={`bg-[#055AB1] text-white font-medium px-4 py-2 rounded-md ${
              selectedCategory === ""
                ? "bg-[#055AB1] text-white"
                : "bg-[#ADD7FE] text-[#4B5563]"
            }`}
            onClick={() => setSelectedCategory("")}
          >
            All Properties ({filteredProperty.length})
          </button>
          <button
            className={`bg-[#ADD7FE] text-[#4B5563] font-medium px-4 py-2 rounded-md ${
              selectedCategory === "New_Projects"
                ? "bg-[#055BB2] text-white"
                : ""
            }`}
            onClick={() => setSelectedCategory("New_Projects")}
          >
            New Projects (
            {
              filteredProperty.filter((itm) => itm?.category === "New_Projects")
                .length
            }
            )
          </button>
          <button
            className={`bg-[#ADD7FE] text-[#4B5563] font-medium px-4 py-2 rounded-md ${
              selectedCategory === "Pre_launch_offers"
                ? "bg-[#055BB2] text-white"
                : ""
            }`}
            onClick={() => setSelectedCategory("Pre_launch_offers")}
          >
            Pre-launch Offers (
            {
              filteredProperty.filter(
                (itm) => itm?.category === "Pre_launch_offers"
              ).length
            }
            )
          </button>
        </div>
        <hr className="mt-4 md:w-6/12" />
        <h3 className="text-xl font-medium mt-5">
          {categoryFilteredProperties.length} results for rental property
        </h3>
        <div>
          {currentProperties?.map((property) => (
            <PropertyCard key={property?._id} property={property} />
          ))}
        </div>
        <hr className="mt-5 mb-5 w-8/12" />
        <Pagination
          current={currentPage}
          pageSize={itemsPerPage}
          total={categoryFilteredProperties.length}
          onChange={handlePageChange}
          showSizeChanger={false}
          showQuickJumper={true}
        />
      </div>
    </>
  );
};

export default IsProperty;
