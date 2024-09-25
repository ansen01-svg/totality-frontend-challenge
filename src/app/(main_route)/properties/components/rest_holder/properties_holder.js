import PropertyCard from "./property_card";

export default function PropertiesHolder(props) {
  const { filteredProperties } = props;

  return (
    <div className="w-full flex flex-col items-center justify-center gap-5 lg:flex-1">
      {filteredProperties.map((property, index) => {
        return <PropertyCard key={index} property={property} />;
      })}
    </div>
  );
}
