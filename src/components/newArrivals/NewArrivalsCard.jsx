import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import { newArrivalsData } from '../../data/newArrivalsData';

export const NewArrivalsCard = () => {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="content product p-1"
      >
        {newArrivalsData.map((data, index) => (
          <SwiperSlide className="box" key={index}>
            <div className="img">
              <img src={data.cover} alt={data.name} />
            </div>
            <h4>{data.name}</h4>
            <span>${data.price}</span>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
