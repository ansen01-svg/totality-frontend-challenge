import Image from "next/image";

export default function Wallpaper() {
  return (
    <div className="w-full h-[calc(600px+160px)] py-20">
      <div className="w-full h-full mt-6 relative">
        <div className="w-full absolute top-0 left-0 mt-10 text-[25px] text-white z-20 lg:text-[40px]">
          <p className="text-center lg:text-left lg:ml-24 lg:mt-5">
            Your Rental,
          </p>
          <p className="text-center lg:text-left lg:ml-24 lg:mt-5">
            Your Timeline,
          </p>
          <p className="text-center lg:text-left lg:ml-24 lg:mt-5">Your Way.</p>
        </div>
        <Image
          src={
            "https://media.istockphoto.com/id/1188856342/photo/they-just-bought-the-new-apartment.jpg?s=1024x1024&w=is&k=20&c=XAccVhI8qQgM94n3W667DBjJcjn4o9JjdnapBbVAAXQ="
          }
          alt="wallpaper"
          fill
          priority
          sizes="(min-width:1024px) 100vw, 100vw, 100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
          className="rounded-2xl lg:rounded-3xl"
        />
      </div>
    </div>
  );
}
