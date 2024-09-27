import PageContent from "./page_content";

export const metadata = {
  title: "Booking Confirmed | EasyRentals – Your Home Awaits",
  description: "Your booking is confirmed! Thank you for choosing EasyRentals.",
};

export default function Home() {
  return (
    <div className="w-full px-6 lg:px-12 flex items-center justify-center">
      <PageContent />
    </div>
  );
}
