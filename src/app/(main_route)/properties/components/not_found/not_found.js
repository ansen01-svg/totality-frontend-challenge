import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

export default function NotFound() {
  return (
    <div className="w-full h-[205px] px-6 text-black flex flex-col items-center justify-center gap-2">
      <SearchRoundedIcon fontSize="medium" />
      <p className="text-[15px]">No properties found</p>
    </div>
  );
}
