import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs } from "swiper";
import { SwiperBtn, Discount, Icon } from "..";
import { arrowLeftIconSvg, arrowRightIconSvg } from "../../data/icons";

export const ImgGallery = ({ product, productImages, className }) => {
  const { id, discount } = product;
  const [thumbsSwiper, setThumbsSwiper] = useState();
  const [swiperInstance, setSwiperInstance] = useState();

  return (
    <div className={`img-gallery ${className}`}>
      {discount && <Discount discount={discount} />}
      <div className="gallery-top">
        <Swiper
          onSwiper={(swiper) => setSwiperInstance(swiper)}
          modules={[FreeMode, Thumbs]}
          loop={true}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          className="swiper"
        >
          {productImages
            .filter((productImg) => productImg.product === id)
            .map((image) => (
              <SwiperSlide key={image.id}>
                <img src={image.img} alt="img" />
              </SwiperSlide>
            ))}
        </Swiper>
        <SwiperBtn
          className="swiper-button-prev"
          onClick={() => swiperInstance.slidePrev()}
        >
          <Icon icon={arrowLeftIconSvg} className="arrow left" />
        </SwiperBtn>
        <SwiperBtn
          className="swiper-button-next"
          onClick={() => swiperInstance.slideNext()}
        >
          <Icon icon={arrowRightIconSvg} className="arrow right" />
        </SwiperBtn>
      </div>
      <div className="gallery-thumb">
        <Swiper
          onSwiper={setThumbsSwiper}
          modules={[FreeMode, Thumbs]}
          freeMode={true}
          loop={true}
          spaceBetween={10}
          breakpoints={{
            322: { slidesPerView: 1 },
            324: { slidesPerView: 2 },
            450: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          watchSlidesProgress={true}
          className="swiper-thumb"
        >
          {productImages
            .filter((productImg) => productImg.product === id)
            .map((image) => (
              <SwiperSlide key={image.id}>
                <img src={image.img} alt="img" />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};
