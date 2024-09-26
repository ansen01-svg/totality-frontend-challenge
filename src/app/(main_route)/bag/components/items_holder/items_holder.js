import ItemsCard from "./items_card";

export default function ItemsHolder({ cart }) {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-5 lg:flex-1">
      {cart.map((item, index) => {
        return <ItemsCard key={index} item={item} />;
      })}
    </div>
  );
}
