import Card from "./card";
import NoAccountsOutlinedIcon from "@mui/icons-material/NoAccountsOutlined";
import OtherHousesOutlinedIcon from "@mui/icons-material/OtherHousesOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import AirOutlinedIcon from "@mui/icons-material/AirOutlined";

export default function Info() {
  return (
    <div className="w-full py-16 flex flex-col items-center justify-center gap-10">
      <div>
        <h1 className="text-[20px] lg:font-semibold lg:text-3xl">
          Why Use EasyRentals
        </h1>
      </div>
      <div className="w-full flex items-center justify-center flex-wrap gap-5">
        <Card
          icon={<AirOutlinedIcon sx={{ fontSize: "120px", color: "#999" }} />}
          title="Easy To Use"
          description="Find your desired property in just a few steps."
        />
        <Card
          icon={
            <NoAccountsOutlinedIcon sx={{ fontSize: "120px", color: "#999" }} />
          }
          title="Avoid Brokers"
          description="We directly connect you to verified owners to save brokerage."
        />
        <Card
          icon={
            <OtherHousesOutlinedIcon
              sx={{ fontSize: "120px", color: "#999" }}
            />
          }
          title="Shortlist Without Visit"
          description="Extensive information makes it easy."
        />
        <Card
          icon={
            <DescriptionOutlinedIcon
              sx={{ fontSize: "120px", color: "#999" }}
            />
          }
          title="Rental Agreement"
          description="Assistance in creating rental agreement and paper work."
        />
      </div>
    </div>
  );
}
