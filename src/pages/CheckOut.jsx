import React from 'react';
import { CustomerInfo } from '../components/checkOutDetails/CeckoutInfo/CustomerInfo';
import { CurrentCart } from '../components/checkOutDetails/CurrentCart/CurrentCart';

export const CheckOut = () => {
  return (
    <section className="container checkOutSection">
      <div className="d_flex">
        <CustomerInfo />
        <CurrentCart />
      </div>
    </section>
  );
};
