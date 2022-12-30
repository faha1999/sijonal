import React from 'react';
import { FlashDeals } from '../components/FlashDeals/FlashDeals';
import { Home } from '../components/home/Home';
import { TopCategories } from '../components/topCategories/TopCategories';

export const MainPage = ({ flashData, addToCart, CartItem }) => {
  return (
    <>
      <Home CartItem={CartItem} />
      <FlashDeals flashData={flashData} addToCart={addToCart} />
      <TopCategories />
    </>
  );
};
