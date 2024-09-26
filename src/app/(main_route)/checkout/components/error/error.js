"use client";

import Link from "next/link";

export default function Error() {
  return (
    <div className="w-full h-[90vh] px-3 text-black text-[14px] text-center flex flex-col items-center justify-center gap-2">
      <p>An error occured</p>
      <p>Restart your booking process again.</p>
      <Link href={"/"} className="underline">
        Go Back to Home
      </Link>
    </div>
  );
}
