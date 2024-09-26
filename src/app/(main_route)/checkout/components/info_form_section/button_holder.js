export default function ButtonHolder() {
  return (
    <div className="w-full py-5 rounded-md flex flex-col items-center justify-center">
      <button
        className="w-full py-3 bg-[#e71c28] text-[white] text-[13px] font-medium rounded-md hover:bg-primaryLight disabled:bg-primaryLight shadow-sm"
        type="submit"
      >
        CHECKOUT
      </button>
    </div>
  );
}
