"use client";

import EmptyBag from "./components/empty_bag/empty_bag";
import ItemsHolder from "./components/items_holder/items_holder";
import PaymentDetailsHolder from "./components/payment_details_holder/payment_details_holder";
import { MyCartContext } from "@/app/store_provider";

export default function PageContent({ token }) {
  const { cart } = MyCartContext();

  if (!cart.length) {
    return <EmptyBag />;
  }

  return (
    <div className="w-full min-h-[calc(100vh-56px-147.5px)] py-6 flex flex-col items-center justify-center gap-6 lg:w-[70%] lg:py-10 lg:flex-row lg:items-start lg:gap-10 lg:min-h-[calc(100vh-64px-147.5px)]">
      <ItemsHolder cart={cart} />
      <PaymentDetailsHolder cart={cart} token={token} />
    </div>
  );
}
