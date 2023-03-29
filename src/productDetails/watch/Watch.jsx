import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { PageTitle } from '../../Common/pageTitle/PageTitle';

export const Watch = ({ watchImg, watchDetails, addToCart }) => {
  const [currentProductImage, setCurrentProductImage] = useState(0);
  const { pathname } = useLocation();

  return (
    <>
      <section className="productDetails">
        <PageTitle title="Watch" />

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
          </div>
          <div className="product-description flow">
            <span className="pathName">
              <a href="/">Home</a> {pathname}
            </span>

            {watchDetails.map((watchDetails) => (
              <div key={watchDetails.name}>
                <h1 className="">{watchDetails.name}</h1>
                <p className="description">{watchDetails.description}</p>
                <div className="product-price">
                  <div className="original-price">
                    <span className="">${watchDetails.price}</span>
                  </div>
                </div>
                <div className="action-wrapper">
                  <button
                    onClick={() => addToCart(watchDetails)}
                    className="btn-primary"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
