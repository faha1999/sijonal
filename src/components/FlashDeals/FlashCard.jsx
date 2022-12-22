import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import { flashData } from '../../data/flashData';
import { AiFillHeart, AiFillStar, AiOutlinePlus } from 'react-icons/ai';

export const FlashCard = ({ addToCart }) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <>
      <Swiper
        slidesPerView={4}
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
        {flashData.map((data) => (
          <SwiperSlide className="box">
            <div className="product mtop">
              <div className="img">
                <span className="discount">{data.discount}% Off</span>
                <img src={data.cover} alt={data.name} />
                <div className="product-like">
                  <label>{count}</label> <br />
                  <AiFillHeart onClick={increment} />
                </div>
              </div>
              <div className="product-details">
                <h3>{data.name}</h3>
                <div className="rate">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
                <div className="price">
                  <h4>${data.price}.00 </h4>

                  <button onClick={() => addToCart(data)}>
                    <AiOutlinePlus />
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
