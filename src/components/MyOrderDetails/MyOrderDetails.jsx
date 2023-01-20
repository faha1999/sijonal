import React from 'react';

export const MyOrderDetails = () => {
  return (
    <div className="MyOrderDetails">
      <h1>Track my parcel</h1>
      <div className="d_flex">
        <div className="tracking_id">
          <h3>Tracking ID</h3>
          <h3>
            <strong>642654812519</strong>
          </h3>
        </div>

        <div className="tracking_details">
          <h3>your parcel is delivered</h3>
        </div>

        <div className="customer_info">
          <h3>Customer and order info</h3>

          <div className="track_id">
            <h3>Tracking ID</h3>
            <h3>
              <strong>642654812519</strong>
            </h3>
          </div>

          <div className="name">
            <h3>Customer Name</h3>
            <h3>
              <strong>Jon dou</strong>
            </h3>
          </div>

          <div className="area">
            <h3>Area</h3>
            <h3>
              <strong>Lorem ipsum dolor sit.</strong>
            </h3>
          </div>

          <div className="order_date">
            <h3>Placed At</h3>
            <h3>
              <strong>Dec. 10th, 2023 05:60 pm</strong>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
