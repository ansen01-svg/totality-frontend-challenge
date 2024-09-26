import Image from "next/image";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { MyCartContext } from "@/app/store_provider";

export default function PropertyCard(props) {
  const { property } = props;

  return (
    <div className="w-full bg-primary flex flex-col items-center justify-center rounded-md shadow-md lg:flex-row">
      <ImageHolder images={property.images} />
      <DetailsHolder property={property} />
    </div>
  );
}

function ImageHolder({ images }) {
  return (
    <div className="w-full h-[150px] lg:w-[250px] lg:h-[250px] rounded-l-md">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper w-full h-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full rounded-l-md">
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                fill
                priority
                sizes="(max-width:640px) 95vw, 250px"
                style={{ objectFit: "cover" }}
                className="rounded-l-md"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

function DetailsHolder({ property }) {
  const { id, type, city, locality, price, area, status, bathroom, deposit } =
    property;

  const [disableBtn, setDisableBtn] = useState(false);

  const { cart, dispatch } = MyCartContext();

  // add item to cart
  const addToCart = () => {
    dispatch({ type: "ADD_ITEM_TO_CART", payload: property });
    setDisableBtn(true);
  };

  // disable the property present in cart on load
  useEffect(() => {
    const addedItem = cart.find((item) => item.id === id);

    if (addedItem) {
      setDisableBtn(true);
    }
  }, [cart, id]);

  return (
    <div className="w-full h-[200px] px-5 py-3 lg:flex-1 lg:h-[250px]">
      <div className="w-full p-2 text-[15px] font-medium flex flex-col items-start justify-center">
        <p>{type}</p>
        <p className="text-black">
          {locality}, {city}
        </p>
      </div>
      <div className="w-full p-2 flex items-start justify-center">
        <div className="flex-1 flex flex-col items-start justify-center border-r-[1px] border-slate-200">
          <p>
            Rs. <span className="text-[20px] font-medium">{price}</span> /month
          </p>
          <p className="text-[15px] text-black">+ Deposit Rs. {deposit}</p>
        </div>
        <div className="w-[32%] px-2 flex flex-col items-start justify-center border-r-[1px] border-slate-200">
          <p>
            <span className="font-medium">{area}</span> sqft
          </p>
          <p className="text-[15px] text-black">Built-up Area</p>
        </div>
        <div className="w-[24%] px-2 text-[15px] text-black flex flex-col items-start justify-center">
          <p>{bathroom} Baths</p>
          <p>{status}</p>
        </div>
      </div>
      <div className="w-full px-2 py-2 text-[15px] font-medium flex items-center justify-end lg:py-6">
        <button
          className="px-6 py-2 bg-[#e71c28] text-white disabled:bg-primaryLight hover:bg-primaryLight rounded-md"
          disabled={disableBtn}
          onClick={addToCart}
        >
          {disableBtn ? "Item in Bag" : "Add to Bag"}
        </button>
      </div>
    </div>
  );
}
