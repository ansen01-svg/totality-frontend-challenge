"use client";

import { useMediaQuery } from "@mui/material";
import { useState, useEffect, useCallback } from "react";
import propertiesData from "../../data.json";
import Error from "./components/error_page/error_page";
import Loading from "./components/loading/loading";
import FilterButton from "./components/filter_button/filter_button";
import DesktopFilterSection from "./components/desktop_filter_section/desktop_filter_section";
import RestHolderSection from "./components/rest_holder/rest_holder";
import MobileFilterModal from "./components/mobile_filter_modal/mobile_filter_modal";

export default function PageContent(props) {
  const { searchParams } = props;
  const city = searchParams.city;

  const [showFilterModal, setShowFilterModal] = useState(false);

  const [loading, setLoading] = useState(true);
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [filters, setFilters] = useState({
    price: [],
    type: [],
    locality: [],
    amenities: [],
  });

  const mobilescreen = useMediaQuery("(max-width:1024px)");

  // open filter modal
  const openFilterModal = () => {
    setShowFilterModal(true);
  };

  // Function to apply filters
  const applyFilters = useCallback(() => {
    let filtered = [...properties];

    // Apply price filter
    if (filters.price.length > 0) {
      filtered = filtered.filter(
        (product) =>
          parseInt(product.price) >= parseInt(filters.price[0].split("-")[0]) &&
          parseInt(product.price) <= parseInt(filters.price[0].split("-")[1])
      );
    }

    // Apply apartment type filter
    if (filters.type.length > 0) {
      filtered = filtered.filter((property) =>
        filters.type.includes(property.type)
      );
    }

    // Apply apartment locality filter
    if (filters.locality.length > 0) {
      filtered = filtered.filter((property) =>
        filters.locality.includes(property.locality)
      );
    }

    // Apply apartment amenities filter
    if (filters.amenities.length > 0) {
      filtered = filtered.filter((property) =>
        property.amenities.some((amenity) =>
          filters.amenities.includes(amenity)
        )
      );
    }

    setFilteredProperties(filtered);
  }, [
    properties,
    filters.price,
    filters.type,
    filters.locality,
    filters.amenities,
  ]);

  // handle change for filters
  const handleFilterChange = (filterType, value) => {
    setFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };

      // Toggle filter value
      if (updatedFilters[filterType].includes(value[0])) {
        updatedFilters[filterType] = updatedFilters[filterType].filter(
          (val) => val !== value[0] && val !== value[1]
        );
      } else {
        updatedFilters[filterType] = [...updatedFilters[filterType], ...value];
      }

      return updatedFilters;
    });
  };

  // clear filters
  const clearFilters = () => {
    setFilters({
      price: [],
      type: [],
      locality: [],
      amenities: [],
    });
  };

  // filters values array
  const filtersArr = [
    ...Object.values(filters)[0],
    ...Object.values(filters)[1],
    ...Object.values(filters)[2],
  ];

  // apply filters whenever filters changes
  useEffect(() => {
    applyFilters();
  }, [filters]);

  // set properties according to filtered locations on load
  useEffect(() => {
    if (!city) {
      setProperties([]);
    }

    const filters = propertiesData.filter((property) => property.city === city);
    setProperties(filters);
    setFilteredProperties(filters);
    setLoading(false);
  }, [city]);

  // if city parameter is deleted
  if (!city) {
    return <Error />;
  }

  // if properties data is not loaded yet
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="w-full py-6 flex flex-col items-center justify-center gap-6 lg:w-[80%] lg:py-10 lg:flex-row lg:items-start lg:gap-10">
      {mobilescreen && <FilterButton openFilterModal={openFilterModal} />}
      {mobilescreen && showFilterModal && (
        <MobileFilterModal
          showFilterModal={showFilterModal}
          setShowFilterModal={setShowFilterModal}
          handleFilterChange={handleFilterChange}
          clearFilters={clearFilters}
          filters={filters}
          disableClearBtn={filtersArr.length < 1}
          properties={properties}
        />
      )}
      {!mobilescreen && (
        <DesktopFilterSection
          handleFilterChange={handleFilterChange}
          filters={filters}
          properties={properties}
        />
      )}
      <RestHolderSection
        filteredProperties={filteredProperties}
        city={city}
        filters={filters}
        setFilters={setFilters}
        clearFilters={clearFilters}
      />
    </div>
  );
}
