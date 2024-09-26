import Image from "next/image";
import { MyCartContext } from "@/app/store_provider";

export default function ItemsCard({ item }) {
  return (
    <div className="w-full flex flex-col items-center justify-center border-[1px] border-slate-200 lg:flex-row rounded-md shadow-sm">
      <ImageHolder image={item.images[0]} />
      <DetailsHolder item={item} />
    </div>
  );
}

function ImageHolder({ image }) {
  return (
    <div className="w-full h-[120px] lg:w-[40%] lg:h-[190px] rounded-t-md relative">
      <Image
        src={image}
        alt={`Cart item`}
        fill
        priority
        sizes="(max-width:640px) 95vw, 250px"
        style={{ objectFit: "cover" }}
        className="rounded-t-md lg:rounded-tr-none lg:rounded-l-md"
      />
    </div>
  );
}

function DetailsHolder({ item }) {
  const { id, type, city, locality, price, area, status, bathroom, deposit } =
    item;

  const { dispatch } = MyCartContext();

  // remove item from cart
  const removeItemFromCart = () => {
    dispatch({ type: "REMOVE_ITEM_FROM_CART", payload: { id: id } });
  };

  return (
    <div className="w-full h-[150px] text-[14px] text-black lg:w-[60%] lg:h-[190px] lg:text-[13px]">
      <div className="w-full px-5 py-2 flex flex-col items-start justify-center">
        <p>{type}</p>
        <p>
          {locality}, {city}
        </p>
      </div>
      <div className="w-full px-5 flex items-start justify-center lg:py-2">
        <div className="flex-1 flex flex-col items-start justify-center border-r-[1px] border-slate-200">
          <p>
            Rs. <span className="font-medium">{price}</span> /month
          </p>
          <p>+ Deposit Rs. {deposit}</p>
        </div>
        <div className="w-[35%] px-2 flex flex-col items-start justify-center border-r-[1px] border-slate-200">
          <p>
            <span className="font-medium">{area}</span> sqft
          </p>
          <p>Built-up Area</p>
        </div>
        <div className="w-[24%] px-2 flex flex-col items-start justify-center">
          <p>{bathroom} Baths</p>
          <p>{status}</p>
        </div>
      </div>
      <div className="w-full px-5 py-3 font-medium flex items-center justify-center lg:py-6 lg:justify-end">
        <button
          className="p-1 text-black font-medium"
          onClick={removeItemFromCart}
        >
          Remove Item
        </button>
      </div>
    </div>
  );
}
