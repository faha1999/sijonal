import React, { useState, useRef } from 'react';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import { GrClose, GrNext, GrPrevious } from 'react-icons/gr';

export const LightBox = ({ productData, setLightbox }) => {
  const [currentProductImage, setCurrentProductImage] = useState(0);
  const ref = useRef();

  useOnClickOutside(ref, () => setLightbox(false));

  return (
    <div className="lightbox-overlay">
      <div className="lightbox flex" ref={ref}>
        <GrClose onClick={() => setLightbox(false)} className="close-icon" />
        <img
          className="lightbox-image"
          src={productData[currentProductImage].png}
          alt=""
        />
        <div className="thumbnail-wrapper flex">
          <div className="thumbnail">
            <img
              onClick={() => setCurrentProductImage(0)}
              className={currentProductImage === 0 ? 'active' : ''}
              src={productData[0].thumbnail}
              alt="thumbnail"
            />
          </div>

          <div className="thumbnail">
            <img
              onClick={() => setCurrentProductImage(1)}
              className={currentProductImage === 1 ? 'active' : ''}
              src={productData[1].thumbnail}
              alt="thumbnail"
            />
          </div>

          <div className="thumbnail">
            <img
              onClick={() => setCurrentProductImage(2)}
              className={currentProductImage === 2 ? 'active' : ''}
              src={productData[2].thumbnail}
              alt="thumbnail"
            />
          </div>

          <div className="thumbnail">
            <img
              onClick={() => setCurrentProductImage(3)}
              className={currentProductImage === 3 ? 'active' : ''}
              src={productData[3].thumbnail}
              alt="thumbnail"
            />
          </div>
        </div>
        <button
          onClick={() =>
            setCurrentProductImage((prevState) =>
              prevState === 0 ? productData.length - 1 : prevState - 1,
            )
          }
          className="lightbox-control control-prev"
        >
          <GrPrevious />
        </button>
        <button
          onClick={() =>
            setCurrentProductImage((prevState) =>
              prevState === productData.length - 1 ? 0 : prevState + 1,
            )
          }
          className="lightbox-control control-next"
        >
          <GrNext />
        </button>
      </div>
    </div>
  );
};
