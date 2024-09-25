import FormHolder from "./form-holder";

export default function Banner() {
  return (
    <div className="w-full py-24 flex flex-col items-center justify-center gap-12">
      <div>
        <h1 className="text-[20px] lg:font-semibold lg:text-3xl">
          Find Your Dream House.
        </h1>
      </div>
      <FormHolder />
    </div>
  );
}
