import React from 'react';
import { BsEnvelopeFill, BsFillTelephoneFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export const TopBar = () => {
  return (
    <>
      <section className="head">
        <div className="container d_flex">
          <div className="left row">
            <BsFillTelephoneFill />
            <Link href="tel:+10012 0000 0000">+10012 0000 0000</Link>
            <BsEnvelopeFill />
            <Link href="mailto:hello@sijonal.com">hello@sijonal.com</Link>
          </div>

          <div className="right row RText">
            <Link>FAQ"s</Link>
            <Link>Need Help?</Link>
            <span>🇺🇸</span>
            <Link>EN</Link>
            <span>🇺🇸</span>
            <Link>USD</Link>
          </div>
        </div>
      </section>
    </>
  );
};
