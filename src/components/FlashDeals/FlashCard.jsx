import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';
import { AiFillHeart, AiFillStar, AiOutlinePlus } from 'react-icons/ai';

export const FlashCard = ({ flashData, addToCart }) => {
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
        //centeredSlides={true}
        loop={false}
        navigation={true}
        modules={[Autoplay, Navigation]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {flashData.map((flashData) => (
          <SwiperSlide className="box" key={flashData.id}>
            <div className="product mtop">
              <div className="img">
                <span className="discount">{flashData.discount}% Off</span>
                <img src={flashData.cover} alt={flashData.name} />
                <div className="product-like">
                  <label>{count}</label> <br />
                  <AiFillHeart onClick={increment} />
                </div>
              </div>
              <div className="product-details">
                <h3>{flashData.name}</h3>
                <div className="rate">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
                <div className="price">
                  <h4>${flashData.price}.00 </h4>

                  <button onClick={() => addToCart(flashData)}>
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
