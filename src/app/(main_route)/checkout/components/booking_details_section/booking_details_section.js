import Image from "next/image";
import { PaymentDetailsCard } from "@/app/(main_route)/bag/components/payment_details_holder/payment_details_holder";
import { MyCartContext } from "@/app/store_provider";

export default function BookingDetailsSection() {
  const { cart } = MyCartContext();

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + parseInt(item.price), 0);
  };

  return (
    <div className="w-full py-2 text-[14px] text-black border-[1px] border-slate-200 lg:w-[22vw] lg:text-[13px] rounded-md shadow-sm">
      <Header />
      <PropertyCardHolder cart={cart} />
      <PaymentDetailsCard cart={cart} getTotalPrice={getTotalPrice} />
    </div>
  );
}

function Header() {
  return (
    <div className="w-full px-5 py-2">
      <h1 className="text-left text-[14px] text-black font-medium">
        Your Orders
      </h1>
    </div>
  );
}

function PropertyCardHolder({ cart }) {
  return (
    <div className="w-full px-5 py-2">
      {cart &&
        cart.map((item, index) => {
          return (
            <div
              key={index}
              className="w-full py-2 flex items-center justify-center border-b-[1px] border-slate-200"
            >
              <div className="w-[70px] h-[50px] relative">
                <Image
                  src={item.images[0]}
                  alt="item-img"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="flex-1 h-full px-3 flex flex-col items-start justify-center gap-2">
                <p>{item.type}</p>
                <p>
                  {item.locality}, {item.city}
                </p>
              </div>
            </div>
          );
        })}
    </div>
  );
}
