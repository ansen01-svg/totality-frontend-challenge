import PropertyCard from "./property_card";

export default function PropertiesHolder(props) {
  const { filteredProperties } = props;

  return (
    <div className="w-full flex flex-col items-center justify-center gap-5 md:flex-row md:flex-wrap lg:flex-col lg:flex-nowrap">
      {filteredProperties.map((property, index) => {
        return <PropertyCard key={index} property={property} />;
      })}
    </div>
  );
}
