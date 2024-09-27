import { cookies } from "next/headers";
import PageContent from "./page_content";

export const metadata = {
  title: "EasyRentals | Secure Checkout for Your New Rental Home",
  description:
    "Complete your booking on EasyRentals with a secure and seamless checkout process. Confirm your rental details and make hassle-free payments to secure your new home today!",
};

export default function Home({ searchParams }) {
  const token = cookies().get("token")?.value || "";

  return (
    <div className="w-full px-6 lg:px-12 flex items-center justify-center">
      <PageContent searchParams={searchParams} token={token} />
    </div>
  );
}
