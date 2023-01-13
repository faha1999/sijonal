import React, { useState } from 'react';
import { FaBorderAll } from 'react-icons/fa';
import { TiHome } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import { Navlink } from './mobileHeaderPartials/Navlink';

export const MobileHeader = () => {
  return (
    <>
      <div className="mobileNav">
        <Navlink />
        <Link to="/">
          <TiHome />
        </Link>
        <FaBorderAll />
      </div>
    </>
  );
};
