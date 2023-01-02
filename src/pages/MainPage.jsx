import React from 'react';
import { Discount } from '../components/Discount/Discount';
import { FlashDeals } from '../components/FlashDeals/FlashDeals';
import { Home } from '../components/home/Home';
import { NewArrivals } from '../components/newArrivals/NewArrivals';
import { TopCategories } from '../components/topCategories/TopCategories';

export const MainPage = ({ flashData, addToCart, CartItem }) => {
  return (
    <>
      <Home CartItem={CartItem} />
      <FlashDeals flashData={flashData} addToCart={addToCart} />
      <TopCategories />
      <NewArrivals />
      <Discount />
    </>
  );
};
