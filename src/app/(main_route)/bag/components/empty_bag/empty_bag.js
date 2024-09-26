import Link from "next/link";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";

export default function EmptyBag() {
  return (
    <div className="w-full h-[90vh] text-[15px] text-black flex flex-col items-center justify-center gap-2">
      <AddShoppingCartOutlinedIcon fontSize="large" />
      <p>Your bag is empty.</p>
      <Link href={"/"} className=" underline">
        {`Check out properties`}
      </Link>
    </div>
  );
}
