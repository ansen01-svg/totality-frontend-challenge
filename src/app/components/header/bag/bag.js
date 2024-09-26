import Link from "next/link";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { MyCartContext } from "@/app/store_provider";

export default function Bag() {
  const { cart } = MyCartContext();

  return (
    <div className="relative">
      <Link href="/bag">
        <LocalMallOutlinedIcon fontSize="small" sx={{ color: "#999" }} />
        {cart && (
          <div className="px-[8px] py-[2px] bg-[#e71c28] absolute bottom-[10px] right-[-15px] flex items-center justify-center rounded-full">
            <p className="text-white text-[12px]">{cart.length}</p>
          </div>
        )}
      </Link>
    </div>
  );
}
