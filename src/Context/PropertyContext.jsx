/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useMemo, useState } from "react";
import useAllProperty from "../Hooks/useAllProperty";

const PropertyFilter = createContext();

export const useFilterProperty = () => useContext(PropertyFilter);

const PropertyContext = ({ children }) => {
  const [allProperty] = useAllProperty();
  const [searchQuery, setSearchQuery] = useState("");

  // Search filter
  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  // Memoize filtered data based on searchQuery
  const filteredProperty = useMemo(() => {
    if (!allProperty || allProperty.length === 0) return [];

    if (!searchQuery) {
      return allProperty;
    }

    return allProperty.filter((property) => {
      if (property && property.property_name) {
        return property.property_name.toLowerCase().includes(searchQuery);
      }
      return false;
    });
  }, [allProperty, searchQuery]);

  const [filterData, setFilterData] = useState({
    filters: {},
    setFilters: (newFilters) =>
      setFilterData((prev) => ({ ...prev, filters: newFilters })),
  });

  const allFilterData = {
    ...filterData,
    searchQuery,
    handleSearch,
    filteredProperty,
  };

  return (
    <PropertyFilter.Provider value={allFilterData}>
      {children}
    </PropertyFilter.Provider>
  );
};

export default PropertyContext;
