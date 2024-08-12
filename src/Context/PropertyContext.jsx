import { createContext, useContext, useMemo, useState } from "react";
import useAllProperty from "../Hooks/useAllProperty";

const PropertyFilter = createContext();

export const useFilterProperty = () => useContext(PropertyFilter);

const PropertyContext = ({ children }) => {
  const [allProperty] = useAllProperty();
  const [searchQuery, setSearchQuery] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [propertyTypeFilter, setPropertyTypeFilter] = useState("");
  const [budgetFilter, setBudgetFilter] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const handleLocationChange = (e) => {
    setLocationFilter(e.target.value);
  };

  const handlePropertyTypeChange = (e) => {
    setPropertyTypeFilter(e.target.value);
  };

  const handleBudgetChange = (e) => {
    setBudgetFilter(e.target.value);
  };

  const filteredProperty = useMemo(() => {
    if (!allProperty || allProperty.length === 0) return [];

    return allProperty.filter((property) => {
      const matchesSearchQuery = searchQuery
        ? property.property_name.toLowerCase().includes(searchQuery)
        : true;

      const matchesLocation = locationFilter
        ? property.location.toLowerCase() === locationFilter.toLowerCase()
        : true;

      const matchesPropertyType = propertyTypeFilter
        ? property.property_type.toLowerCase() ===
          propertyTypeFilter.toLowerCase()
        : true;

      const matchesBudget = budgetFilter
        ? property.price <= parseFloat(budgetFilter)
        : true;

      return (
        matchesSearchQuery &&
        matchesLocation &&
        matchesPropertyType &&
        matchesBudget
      );
    });
  }, [
    allProperty,
    searchQuery,
    locationFilter,
    propertyTypeFilter,
    budgetFilter,
  ]);

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
    handleLocationChange,
    handlePropertyTypeChange,
    handleBudgetChange,
    locationFilter,
    propertyTypeFilter,
    budgetFilter,
  };

  return (
    <PropertyFilter.Provider value={allFilterData}>
      {children}
    </PropertyFilter.Provider>
  );
};

export default PropertyContext;
