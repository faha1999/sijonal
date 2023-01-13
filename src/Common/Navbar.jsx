import React, { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import { FaBars, FaBorderAll } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import { MobileHeader } from './header/MobileHeader';

export const Navbar = ({ CartItem }) => {
  const [MobileMenu, setMobileMenu] = useState(false);
  return (
    <>
      <header className="header">
        <div className="container d_flex">
          <div className="catgrories d_flex">
            <span>
              <FaBorderAll />
            </span>
            <h4>
              Categories <BsChevronDown />
            </h4>
          </div>

          <div className="navlink">
            <ul
              className={
                MobileMenu ? 'nav-links-MobileMenu' : 'link f_flex capitalize'
              }
              onClick={() => setMobileMenu(false)}
            >
              <li>
                <Link to="/">home</Link>
              </li>
              <li>
                <Link to="/pages">pages</Link>
              </li>
              <li>
                <Link to="/user">user account</Link>
              </li>
              <li>
                <Link to="/vendor">vendor account</Link>
              </li>
              <li>
                <Link to="/track">track my order</Link>
              </li>
              <li>
                <Link to="/contact-us">contact</Link>
              </li>
            </ul>

            <button
              className="toggle"
              onClick={() => setMobileMenu(!MobileMenu)}
            >
              {MobileMenu ? (
                <GrClose className="close home-btn" />
              ) : (
                <FaBars className="open" />
              )}
            </button>
          </div>
        </div>

        <MobileHeader CartItem={CartItem} />
      </header>
    </>
  );
};
