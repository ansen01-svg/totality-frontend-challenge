import { cookies } from "next/headers";
import PageContent from "./page_content";

export const metadata = {
  title: "Your Cart – EasyRentals | Review and Confirm Your Rental Selections",
  description:
    "Review your selected home rentals on EasyRentals. Confirm details, finalize your booking, and secure your ideal rental property quickly and easily.",
};

export default function Home() {
  const token = cookies().get("token")?.value || "";

  return (
    <div className="w-full px-6 lg:px-12 flex items-center justify-center">
      <PageContent token={token} />
    </div>
  );
}
