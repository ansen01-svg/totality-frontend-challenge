import PageContent from "./page_content";

export const metadata = {
  title:
    "Wide Selection of Rental Cars | Book a car on rent with Carko.in now!",
  description:
    "Explore a wide selection of rental cars at Carko.in. From economy to luxury, find the perfect vehicle for your needs. Book your car rental today!",
};

export default function Home() {
  return (
    <div className="w-full px-6 lg:px-12 flex items-center justify-center">
      <PageContent />
    </div>
  );
}
