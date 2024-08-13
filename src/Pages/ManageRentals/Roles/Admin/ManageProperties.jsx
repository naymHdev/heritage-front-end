import { Pagination } from "antd";
import DashBoardSectionName from "../../../../Components/DashBoardSectionName";
import useAllProperty from "../../../../Hooks/useAllProperty";
import AllPropertyCard from "./AllPropertyCard";
import { useState } from "react";

const ManageProperties = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [allProperty] = useAllProperty();

  // Calculate start and end indexes for pagination
  const itemsPerPage = 5;
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProperties = allProperty.slice(startIndex, endIndex);

  return (
    <>
      <div>
        <DashBoardSectionName
          title="Property List"
          lengths={allProperty.length}
        />
        <section className=" mt-8">
          {currentProperties?.map((property) => (
            <AllPropertyCard key={property._id} property={property} />
          ))}
        </section>
        <div className=" my-6 flex items-center justify-end px-5">
          <Pagination
            current={currentPage}
            pageSize={itemsPerPage}
            total={allProperty.length}
            onChange={handlePageChange}
            showSizeChanger={false}
            showQuickJumper={true}
          />
        </div>
      </div>
    </>
  );
};

export default ManageProperties;
