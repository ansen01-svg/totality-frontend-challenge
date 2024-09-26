import Image from "next/image";

export default function Wallpaper() {
  return (
    <div className="w-full h-[calc(600px+160px)] py-20">
      <div className="w-full h-full relative">
        <div className="absolute top-16 left-[180px] text-[22px] text-white z-20 lg:text-[36px]">
          <p>Your Rental,</p>
          <p>Your Timeline,</p>
          <p>Your Way,</p>
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
