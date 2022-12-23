import React, { useState } from 'react';
import { Header } from './Common/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { Data } from './data/Data';
import { Cart } from './Common/cart/Cart';

export const App = () => {
  const { flashData } = Data;

  const [CartItem, setCartItem] = useState([]);

  const addToCart = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id);

    if (productExit) {
      setCartItem(
        CartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty + 1 }
            : item,
        ),
      );
    } else {
      setCartItem([...CartItem, { ...product, qty: 1 }]);
    }
  };

  return (
    <>
      <BrowserRouter>
        <Header CartItem={CartItem} />
        <Routes>
          <Route
            path="/"
            element={<MainPage flashData={flashData} addToCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={<Cart CartItem={CartItem} addToCart={addToCart} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};
