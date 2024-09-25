export default function InfoHolder({ numberOfProperties, city }) {
  return (
    <div className="w-full py-2 text-[15px] text-black text-left lg:flex-1 lg:font-medium">
      <h1>
        {numberOfProperties} Results | Property For Rent in {city}
      </h1>
    </div>
  );
}
