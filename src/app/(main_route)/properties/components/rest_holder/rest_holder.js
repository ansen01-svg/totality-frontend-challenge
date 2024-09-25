import InfoHolder from "./info_holder";
import FilterOptionsDisplayHolder from "./filter_options_display_holder";
import NotFound from "../not_found/not_found";
import PropertiesHolder from "./properties_holder";

export default function RestHolderSection(props) {
  const { filteredProperties, city, filters, setFilters, clearFilters } = props;

  const filtersArr = [
    ...Object.values(filters)[0],
    ...Object.values(filters)[1],
    ...Object.values(filters)[2],
    ...Object.values(filters)[3],
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center gap-6 lg:flex-1">
      <InfoHolder numberOfProperties={filteredProperties.length} city={city} />
      {filtersArr.length > 0 && (
        <FilterOptionsDisplayHolder
          filters={filters}
          setFilters={setFilters}
          clearFilters={clearFilters}
        />
      )}
      {!filteredProperties.length ? (
        <NotFound />
      ) : (
        <PropertiesHolder filteredProperties={filteredProperties} />
      )}
    </div>
  );
}
