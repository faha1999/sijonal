import React from 'react';
import { TiHome } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import { MobileCategory } from './mobileHeaderPartials/MobileCategory';
import { Navlink } from './mobileHeaderPartials/Navlink';

export const MobileHeader = () => {
  return (
    <>
      <div className="mobileNav">
        <Navlink />
        <Link to="/">
          <TiHome />
        </Link>
        <MobileCategory />
      </div>
    </>
  );
};
