import React from 'react';
import { RiWhatsappFill } from 'react-icons/ri';

export const Whatsapp = () => {
  return (
    <>
      <a
        href="https://wa.me/qr/BDOWEND2KCGIJ1"
        target="_blank"
        rel="noreferrer"
        className="whatsappWrapper flex"
      >
        <div className="wrapperDetails">
          <h3>Chat with us</h3>
        </div>
        <div className="icon">
          <RiWhatsappFill />
        </div>
      </a>
    </>
  );
};
