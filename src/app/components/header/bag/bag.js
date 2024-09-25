import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { MyCartContext } from "@/app/store_provider";

export default function Bag() {
  const { cart } = MyCartContext();

  return (
    <div className="relative">
      <LocalMallOutlinedIcon fontSize="small" sx={{ color: "#999" }} />
      <div className="px-[8px] py-[2px] bg-[#e71c28] absolute bottom-[10px] right-[-15px] flex items-center justify-center rounded-full">
        {cart ? (
          <p className="text-white text-[12px]">{cart.length}</p>
        ) : (
          <p className="text-white text-[12px]">0</p>
        )}
      </div>
    </div>
  );
}
