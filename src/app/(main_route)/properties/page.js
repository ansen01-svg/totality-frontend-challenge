import PageContent from "./page_content";

export const metadata = {
  title: "Find Your Ideal Rental Property | EasyRentals",
  description:
    "Explore a wide range of rental properties on EasyRentals. Find detailed listings with photos, pricing, and location info to help you discover your ideal home quickly and easily.",
};

export default function Home({ searchParams }) {
  return (
    <div className="w-full px-6 bg-secondary lg:px-12 flex items-center justify-center">
      <PageContent searchParams={searchParams} />
    </div>
  );
}
