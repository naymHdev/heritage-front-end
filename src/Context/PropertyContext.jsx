/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const PropertyFilter = createContext();

export const useProperty = () => useContext(PropertyFilter);

const PropertyContext = ({ children }) => {


    
  const [filterData, setFilterData] = useState({
    filters: {},
    setFilters: (newFilters) =>
      setFilterData((prev) => ({ ...prev, filters: newFilters })),
  });

  return (
    <>
      <PropertyFilter.Provider value={filterData}>
        {children}
      </PropertyFilter.Provider>
    </>
  );
};

export default PropertyContext;
