import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';
import { topCartData } from '../../data/topCartData';

export const TopCart = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        className="mySwiper"
        //centeredSlides={true}
        loop={false}
        navigation={true}
        modules={[Autoplay, Navigation]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {topCartData.map((data, index) => (
          <SwiperSlide className="box product" key={index}>
            <div className="nametop d_flex">
              <span className="tleft">{data.para}</span>
              <span className="tright">{data.desc}</span>
            </div>
            <div className="img">
              <img src={data.cover} alt={data.desc} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
