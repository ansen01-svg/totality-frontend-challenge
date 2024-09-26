import { useRouter } from "next/navigation";

// generate random 10 digits number
const randomTenDigitNumber = () => {
  return Math.floor(1000000000 + Math.random() * 9000000000);
};

export default function PaymentDetailsHolder({ cart, token }) {
  const router = useRouter();

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + parseInt(item.price), 0);
  };

  // place order action
  const placeOrder = () => {
    if (!token) {
      router.push(`/signin?callbackUrl=/bag`);
    } else {
      router.push(`/checkout?orderId=${randomTenDigitNumber()}`);
    }
  };

  return (
    <div className="w-full border-[1px] border-slate-200 lg:w-[25vw] rounded-md shadow-sm">
      <PaymentDetailsCard
        cart={cart}
        getTotalPrice={getTotalPrice}
        button={<PlaceOrderButton placeOrder={placeOrder} />}
      />
    </div>
  );
}

export function PaymentDetailsCard(props) {
  const { cart, getTotalPrice, button } = props;

  return (
    <div className="w-full px-5 py-5 text-[13px] text-black">
      <div className="w-full py-2 flex flex-col items-start justify-center gap-5">
        <p className="font-medium">
          PRICE DETAILS ({cart && cart.length} Items)
        </p>
        <div className="w-full flex items-center justify-between">
          <p>Total MRP</p>
          <p>Rs. {getTotalPrice()}</p>
        </div>
        <div className="w-full flex items-center justify-between">
          <p>Brokerage Fee</p>
          <p className="text-green">FREE</p>
        </div>
        <div className="w-full flex items-center justify-between">
          <p>Platform Fee</p>
          <p className="text-green">FREE</p>
        </div>
      </div>
      <div className="w-full py-2 font-medium border-t-[1px] border-slate-200 flex items-start justify-between">
        <p>Total Amount</p>
        <p>Rs. {getTotalPrice()}</p>
      </div>
      {button && button}
    </div>
  );
}

function PlaceOrderButton({ placeOrder }) {
  return (
    <div className="w-full py-2">
      <button
        className="w-full py-2 bg-[#e71c28] text-white font-medium rounded-md"
        onClick={placeOrder}
      >
        PLACE ORDER
      </button>
    </div>
  );
}
