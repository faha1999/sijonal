import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { HiShoppingBag } from 'react-icons/hi';
import { TiHome } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import { MobileCategory } from './mobileHeaderPartials/MobileCategory';
import { Navlink } from './mobileHeaderPartials/Navlink';

export const MobileHeader = ({ CartItem }) => {
  return (
    <>
      <div className="mobileNav">
        <Navlink />

        <FaUserAlt />

        <Link to="/">
          <TiHome />
        </Link>
        <div className="cart">
          <Link to="/cart">
            <HiShoppingBag />
            <span>{CartItem.length === 0 ? '' : CartItem.length}</span>
          </Link>
        </div>
        <MobileCategory />
      </div>
    </>
  );
};
