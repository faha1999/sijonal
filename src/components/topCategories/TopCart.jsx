import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import { topCartData } from '../../data/topCartData';

export const TopCart = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        className="mySwiper"
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 2500,
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
