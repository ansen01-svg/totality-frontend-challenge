import Banner from "./home_page_components/banner/banner";
import Wallpaper from "./home_page_components/wallpaper/wallpaper";
import Info from "./home_page_components/info/info";

export default function Home() {
  return (
    <div className="w-full">
      <Banner />
      <Wallpaper />
      <Info />
    </div>
  );
}
