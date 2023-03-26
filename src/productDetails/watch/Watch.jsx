import React, { useState } from 'react';
import { GrNext, GrPrevious } from 'react-icons/gr';
import { HiMinus, HiPlus } from 'react-icons/hi';
import { watchImg } from '../../data/productsDetals/watch';

export const Watch = ({ addToCart, decreaseQty }) => {
  const [currentProductImage, setCurrentProductImage] = useState(0);

  return (
    <>
      <main className="productDetails">
        <div className="container-md grid product-container">
          <div className="flex product-image">
            <img src={watchImg[currentProductImage].png} alt="products img" />
            <div className="thumbnail-wrapper flex">
              <div className="thumbnail">
                <img
                  onClick={() => setCurrentProductImage(0)}
                  className={currentProductImage === 0 ? 'active' : ''}
                  src={watchImg[0].thumbnail}
                  alt="thumbnail"
                />
              </div>

              <div className="thumbnail">
                <img
                  onClick={() => setCurrentProductImage(1)}
                  className={currentProductImage === 1 ? 'active' : ''}
                  src={watchImg[1].thumbnail}
                  alt="thumbnail"
                />
              </div>
            </div>

            {window.innerWidth <= 768 && (
              <>
                <button
                  onClick={() =>
                    setCurrentProductImage((prevState) =>
                      prevState === 0 ? watchImg.length - 1 : prevState - 1,
                    )
                  }
                  className="lightbox-control control-prev"
                >
                  <GrPrevious />
                </button>
                <button
                  onClick={() =>
                    setCurrentProductImage((prevState) =>
                      prevState === watchImg.length - 1 ? 0 : prevState + 1,
                    )
                  }
                  className="lightbox-control control-next"
                >
                  <GrNext />
                </button>
              </>
            )}
          </div>
          <div className="product-description flow">
            <p className="text-uppercase fw-700 fs-100 letter-spacing-1 Orange">
              Sneaker Company
            </p>
            <h1 className="fw-700 line-height-300 fs-800 blue">
              Fall Limited Edition Sneakers
            </h1>
            <p className="fw-400 line-height-500 fs-400 darkGrayishBlue">
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they’ll withstand
              everything the weather can offer.
            </p>
            <div className="product-price">
              <div className="discounted-price flex">
                <span className="fw-700 blue fs-700">$125.00</span>
                <span className="offer fw-700 fs-400 Orange">50%</span>
              </div>
              <div className="original-price">
                <span className="fw-700 fs-400 line-height-500 text-line-through GrayishBlue">
                  $250.00
                </span>
              </div>
            </div>

            <div className="action-wrapper flex">
              {/* <div className="product-quantity flex">
                <HiMinus onClick={() => decreaseQty()} />
                <span className="fw-700 fs-400 blue">{productQuantity}</span>
                <HiPlus onClick={() => addToCart()} />
              </div> */}
              <button
                onClick={() => addToCart()}
                className="btn flex fw-700 fs-400"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
