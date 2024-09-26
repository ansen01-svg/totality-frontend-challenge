"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Error from "./components/error/error";
import InfoFormSection from "./components/info_form_section/info_form_section";
import BookingDetailsSection from "./components/booking_details_section/booking_details_section";
import { MyCartContext } from "@/app/store_provider";

const initialUserValues = {
  username: "",
  email: "",
  phoneNumber: "",
};

const initialCardValues = {
  number: "",
  name: "",
  expiry: "",
  cvv: "",
};

export default function PageContent({ searchParams, token }) {
  const [user, setUser] = useState(initialUserValues);
  const [card, setCard] = useState(initialCardValues);

  const router = useRouter();
  const { dispatch } = MyCartContext();

  const handleUserChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleCardChange = (e) => {
    setCard({ ...card, [e.target.name]: e.target.value });
  };

  // handle info form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "CLEAR_CART" });
    sessionStorage.clear();
    router.push("/bookingConfirmation");
    setUser(initialUserValues);
    setCard(initialCardValues);
  };

  // fetch user on load and when token changes
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/auth/getCurrentUser`)
      .then((response) => response.json())
      .then((data) => {
        if (!data.data) return;
        setUser({
          username: data.data.username,
          email: data.data.email,
          phoneNumber: data.data.phoneNumber || "",
        });
      })
      .catch((error) => console.log("failed to fetch user", error));
  }, [token]);

  if (!searchParams.orderId) {
    return <Error />;
  }

  return (
    <div className="w-full min-h-[calc(100vh-56px-147.5px)] py-6 flex flex-col items-center justify-center gap-6 lg:w-[58%] lg:py-10 lg:flex-row-reverse lg:items-start lg:gap-10 lg:min-h-[calc(100vh-64px-147.5px)]">
      <BookingDetailsSection />
      <InfoFormSection
        user={user}
        card={card}
        handleUserChange={handleUserChange}
        handleCardChange={handleCardChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
