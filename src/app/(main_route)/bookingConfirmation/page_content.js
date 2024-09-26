"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function PageContent() {
  const router = useRouter();

  // after loading the page, redirect the user to home
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 2000);
  }, [router]);

  return (
    <div className="w-full h-[90vh] flex items-center justify-center">
      <h1 className="text-[20px] text-primary font-bold text-center">
        Thank You For Booking With Us.
      </h1>
    </div>
  );
}
