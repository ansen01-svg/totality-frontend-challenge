import FormHolder from "./form-holder";

export default function Banner() {
  return (
    <div className="w-full px-6 lg:px-12 py-32 flex flex-col items-center justify-center gap-12">
      <div className="flex flex-col items-center justify-center gap-2 lg:gap-4">
        <h1 className="text-[15px] text-primary lg:font-semibold lg:text-[20px]">
          Rent with ease, live with joy
        </h1>
        <h2 className="text-[22px] lg:font-semibold lg:text-[40px]">
          Find the home that fits your journey
        </h2>
      </div>
      <FormHolder />
    </div>
  );
}
