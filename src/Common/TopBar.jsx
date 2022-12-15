import React from 'react';
import { BsEnvelopeFill, BsFillTelephoneFill } from 'react-icons/bs';

export const TopBar = () => {
  return (
    <>
      <section className="head">
        <div className="container d_flex">
          <div className="left row">
            <BsFillTelephoneFill />
            <label>+10012 0000 0000</label>
            <BsEnvelopeFill />
            <label>hello@sijonal.com </label>
          </div>

          <div className="right row RText">
            <label>FAQ"s</label>
            <label>Need Help?</label>
            <span>🇺🇸</span>
            <label>EN</label>
            <span>🇺🇸</span>
            <label>USD</label>
          </div>
        </div>
      </section>
    </>
  );
};
