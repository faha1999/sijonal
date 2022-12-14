import React from 'react';
import { Header } from './components/Common/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" />
        </Routes>
      </BrowserRouter>
    </>
  );
};
