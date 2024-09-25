import { useMemo } from "react";
import Header from "./header";
import FiltersSection from "./filters_section";

const getLocalities = (properties) => {
  return properties.map((property) => property.locality);
};

export default function FilterHolder(props) {
  const { filters, handleFilterChange, properties } = props;

  const localitiesArray = getLocalities(properties);

  const priceData = useMemo(() => {
    return [
      {
        id: 1,
        label: "10,000 to 45,000",
        labelFor: "10000 to 45000",
        name: "price",
        value: ["10000-45000"],
      },
      {
        id: 2,
        label: "45,000 to 90,000",
        labelFor: "45000 to 90000",
        name: "price",
        value: ["45000-90000"],
      },
      {
        id: 3,
        label: "90,000 to 150,000",
        labelFor: "90000 to 150000",
        name: "price",
        value: ["90000-150000"],
      },
      {
        id: 4,
        label: "150,000 to 500,000",
        labelFor: "150000 to 500000",
        name: "price",
        value: ["150000-500000"],
      },
    ];
  }, []);

  // generate localities data
  const buildLocalitiesData = () => {
    let localitiesData = [];

    [...new Set(localitiesArray)].forEach((locality, index) => {
      const obj = {
        id: index + 1,
        label: locality,
        labelFor: locality,
        name: "locality",
        value: [locality],
      };
      localitiesData.push(obj);
    });
    return localitiesData;
  };

  const propertyTypeData = useMemo(() => {
    return [
      {
        id: 1,
        label: "1 BHK",
        labelFor: "1 BHK",
        name: "type",
        value: ["1 BHK Apartment"],
      },
      {
        id: 2,
        label: "2 BHK",
        labelFor: "2 BHK",
        name: "type",
        value: ["2 BHK Apartment"],
      },
      {
        id: 3,
        label: "3 BHK",
        labelFor: "3 BHK",
        name: "type",
        value: ["3 BHK Apartment"],
      },
      {
        id: 4,
        label: "4 BHK",
        labelFor: "4 BHK",
        name: "type",
        value: ["4 BHK Apartment"],
      },
    ];
  }, []);

  const amenitiesData = useMemo(() => {
    return [
      {
        id: 1,
        label: "Parking",
        labelFor: "parking",
        name: "amenities",
        value: ["Parking"],
      },
      {
        id: 2,
        label: "Lift",
        labelFor: "lift",
        name: "amenities",
        value: ["Lift"],
      },
      {
        id: 3,
        label: "Gym",
        labelFor: "gym",
        name: "amenities",
        value: ["Gym"],
      },
      {
        id: 4,
        label: "Security Personal",
        labelFor: "security personal",
        name: "amenities",
        value: ["Security Personal"],
      },
      {
        id: 5,
        label: "Power Backup",
        labelFor: "power backup",
        name: "amenities",
        value: ["Power Backup"],
      },
      {
        id: 6,
        label: "Gas Pipeline",
        labelFor: "gas pipeline",
        name: "amenities",
        value: ["Gas Pipeline"],
      },
      {
        id: 7,
        label: "Swimming Pool",
        labelFor: "swimming pool",
        name: "amenities",
        value: ["Swimming Pool"],
      },
      {
        id: 8,
        label: "Laundry",
        labelFor: "laundry",
        name: "amenities",
        value: ["Laundry"],
      },
      {
        id: 9,
        label: "Club House",
        labelFor: "club house",
        name: "amenities",
        value: ["Club House"],
      },
    ];
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center gap-2">
      <Header title={"Filter by"} />
      <FiltersSection
        filters={filters}
        title="Price"
        data={priceData}
        handleFilterChange={handleFilterChange}
      />
      <FiltersSection
        filters={filters}
        title="Type"
        data={propertyTypeData}
        handleFilterChange={handleFilterChange}
      />
      <FiltersSection
        filters={filters}
        title="Locality"
        data={buildLocalitiesData()}
        handleFilterChange={handleFilterChange}
      />
      <FiltersSection
        filters={filters}
        title="Amenities"
        data={amenitiesData}
        handleFilterChange={handleFilterChange}
      />
    </div>
  );
}
