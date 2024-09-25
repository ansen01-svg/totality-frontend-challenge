import TuneIcon from "@mui/icons-material/Tune";

export default function FilterButton({ openFilterModal }) {
  return (
    <div className="w-full flex items-center justify-center">
      <button
        className="w-full py-2 text-[15px] font-medium text-blue flex items-center justify-center gap-2 border-[1px] border-slate-200 rounded-md hover:text-white hover:bg-blue md:w-[50%]"
        onClick={openFilterModal}
      >
        <TuneIcon fontSize="small" />
        Filter
      </button>
    </div>
  );
}
