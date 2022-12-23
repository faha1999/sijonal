import React from 'react';
import { TiFlash } from 'react-icons/ti';
import { FlashCard } from './FlashCard';

export const FlashDeals = ({ CartItem }) => {
  return (
    <>
      <section className="flash">
        <div className="container">
          <div className="heading f_flex">
            <TiFlash style={{ color: '#fa6a27', margin: '.625rem' }} />
            <h1>Flash Delas</h1>
          </div>
          <FlashCard CartItem={CartItem} />
        </div>
      </section>
    </>
  );
};
