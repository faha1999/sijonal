import React from 'react';
import { BsCheckLg } from 'react-icons/bs';

export const MyOrderDetails = () => {
  return (
    <div className="MyOrderDetails">
      <h1>Track my parcel</h1>
      <div className="d_grid">
        <div className="tracking_id">
          <h3 className="thin">Tracking ID</h3>
          <h3>
            <strong>642654812519</strong>
          </h3>
        </div>

        <div className="tracking_details">
          <div className="steps">
            <div class="step completed">
              <div class="step-icon-wrap d_flex">
                <div class="step-icon">
                  <BsCheckLg />
                </div>
                <h4 class="step-title">Confirmed delivery</h4>
              </div>

              <h4 class="step-date">Dec. 19th , 2023, 5:30pm</h4>
            </div>

            <div class="step completed">
              <div class="step-icon-wrap d_flex">
                <div class="step-icon">
                  <BsCheckLg />
                </div>
                <h4 class="step-title">Confirmed Order</h4>
              </div>
              <h4 class="step-date">Dec. 19th , 2023, 5:30pm</h4>
            </div>

            <div class="step">
              <div class="step-icon-wrap d_flex">
                <div class="step-icon">
                  <BsCheckLg />
                </div>
                <h4 class="step-title">QC checking</h4>
              </div>
              <h4 class="step-date">Dec. 19th , 2023, 5:30pm</h4>
            </div>
          </div>
        </div>

        <div className="customer_info">
          <h3>Customer and order info</h3>

          <div className="track_id">
            <h3 className="thin">Tracking ID</h3>
            <h3>
              <strong>642654812519</strong>
            </h3>
          </div>

          <div className="name">
            <h3 className="thin">Customer Name</h3>
            <h3>
              <strong>Jon dou</strong>
            </h3>
          </div>

          <div className="area">
            <h3 className="thin">Area</h3>
            <h3>
              <strong>Lorem ipsum dolor sit.</strong>
            </h3>
          </div>

          <div className="order_date">
            <h3 className="thin">Placed At</h3>
            <h3>
              <strong>Dec. 10th, 2023 05:60 pm</strong>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
