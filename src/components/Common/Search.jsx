import React from 'react';
import logo from '../../assets/images/sijonal(seasonal).png';
import { Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';
import { HiShoppingBag } from 'react-icons/hi';

export const Search = () => {
  window.addEventListener('scroll', function () {
    const search = document.querySelector('.search');
    search.classList.toggle('active', window.scrollY > 100);
  });

  return (
    <>
      <section className="search">
        <div className="container c_flex">
          <div className="logo width">
            <img src={logo} alt="sijonal" />
          </div>

          <div className="search-box f_flex">
            <BsSearch />
            <input type="text" placeholder="Search and hit enter..." />
            <span>All Category</span>
          </div>

          <div className="icon f_flex width">
            <div className="icon-circle">
              <FaUserAlt />
            </div>
            <div className="cart">
              <Link to="/cart">
                <div className="icon-circle">
                  <HiShoppingBag />
                </div>
                <span>0</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
