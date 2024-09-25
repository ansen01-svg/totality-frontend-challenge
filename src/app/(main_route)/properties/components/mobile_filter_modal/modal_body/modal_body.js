import FilterHolder from "./filter_holder";
import Button from "./button";

export default function ModalBody(props) {
  const { filters, setShowFilterModal, handleFilterChange, properties } = props;

  // close filter modal
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowFilterModal(false);
  };

  return (
    <div className="w-full h-[calc(960px-128px)] overflow-y-auto">
      <form
        className="w-full px-4 flex flex-col items-center justify-start gap-2"
        onSubmit={handleSubmit}
      >
        <FilterHolder
          filters={filters}
          handleFilterChange={handleFilterChange}
          properties={properties}
        />
        <Button />
      </form>
    </div>
  );
}
