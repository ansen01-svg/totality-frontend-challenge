import CircularProgress from "@mui/material/CircularProgress";

export default function Loading() {
  return (
    <div className="w-full h-[90vh] px-6 lg:px-12 flex items-center justify-center">
      <CircularProgress size="30px" />
    </div>
  );
}
