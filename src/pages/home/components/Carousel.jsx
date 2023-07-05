import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay } from "swiper";
import { SwiperBtn } from "../../../components";
import { arrowLeftIconSvg, arrowRightIconSvg } from "../../../data/icons";

export const Carousel = ({ banners }) => {
  const [swiperInstance, setSwiperInstance] = useState();

  return (
    <div className="swiper-carousel">
      <Swiper
        onSwiper={(swiper) => {
          setSwiperInstance(swiper);
        }}
        loop={true}
        slidesPerView={3}
        breakpoints={{
          320: { slidesPerView: 1 },
          705: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        pagination={{ clickable: true }}
        modules={[FreeMode, Pagination, Autoplay]}
        autoplay={{
          delay: 3000,
        }}
        spaceBetween={16}
        className="swiper"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div className="img">
              <img src={banner.img} alt="swiper banner" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <SwiperBtn
        className="swiper-button-next"
        onClick={() => swiperInstance.slideNext()}
      >
        <div className="icon arrow left">{arrowLeftIconSvg}</div>
      </SwiperBtn>
      <SwiperBtn
        className="swiper-button-prev"
        onClick={() => swiperInstance.slidePrev()}
      >
        <div className="icon arrow right">{arrowRightIconSvg}</div>
      </SwiperBtn>
    </div>
  );
};
