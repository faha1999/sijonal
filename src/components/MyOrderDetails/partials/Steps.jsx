import React from 'react';
import { RiShoppingBag3Fill } from 'react-icons/ri';
import { AiFillCheckCircle } from 'react-icons/ai';

export const Steps = () => {
  return (
    <>
      <div className="steps">
        <div id="OrderReceived" className="step completed d_flex">
          <div className="date">
            <h4>5:30pm</h4>
            <h4>Dec. 19th</h4>
          </div>

          <div className="step-icon-wrap d_flex">
            <div className="step-icon">
              <RiShoppingBag3Fill />
            </div>
            <h4 className="step-title">Order received</h4>
          </div>
        </div>

        <div id="OrderReceivedDetails" className="step complete d_flex">
          <div className="date">
            <h4>5:30pm</h4>
            <h4>Dec. 19th</h4>
          </div>

          <div className="step-icon-wrap d_flex">
            <div className="step-icon">
              <AiFillCheckCircle />
            </div>
            <h4 className="step-title">Lorem ipsum dolor sit.</h4>
          </div>
        </div>

        <div id="OrderReceivedDetails" className="step complete d_flex">
          <div className="date">
            <h4>5:30pm</h4>
            <h4>Dec. 19th</h4>
          </div>

          <div className="step-icon-wrap d_flex">
            <div className="step-icon">
              <AiFillCheckCircle />
            </div>
            <h4 className="step-title">Lorem ipsum dolor sit.</h4>
          </div>
        </div>

        <div id="shipped" className="step completed d_flex">
          <div className="date">
            <h4>5:30pm</h4>
            <h4>Dec. 19th</h4>
          </div>

          <div className="step-icon-wrap d_flex">
            <div className="step-icon">
              <RiShoppingBag3Fill />
            </div>
            <h4 className="step-title">Your order is shipped</h4>
          </div>
        </div>

        <div id="shippedDetails" className="step complete d_flex">
          <div className="date">
            <h4>5:30pm</h4>
            <h4>Dec. 19th</h4>
          </div>

          <div className="step-icon-wrap d_flex">
            <div className="step-icon">
              <AiFillCheckCircle />
            </div>
            <h4 className="step-title">Lorem ipsum dolor sit.</h4>
          </div>
        </div>

        <div id="shippedDetails" className="step complete d_flex">
          <div className="date">
            <h4>5:30pm</h4>
            <h4>Dec. 19th</h4>
          </div>

          <div className="step-icon-wrap d_flex">
            <div className="step-icon">
              <AiFillCheckCircle />
            </div>
            <h4 className="step-title">Lorem ipsum dolor sit.</h4>
          </div>
        </div>

        <div id="delivered" className="step completed d_flex">
          <div className="date">
            <h4>5:30pm</h4>
            <h4>Dec. 19th</h4>
          </div>

          <div className="step-icon-wrap d_flex">
            <div className="step-icon">
              <RiShoppingBag3Fill />
            </div>
            <h4 className="step-title">Delivered</h4>
          </div>
        </div>
      </div>
    </>
  );
};
