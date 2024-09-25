import Banner from "./home_page_components/banner/banner";
import Info from "./home_page_components/info/info";

export default function Home() {
  return (
    <div className="w-full px-6 lg:px-12">
      <Banner />
      <Info />
    </div>
  );
}
