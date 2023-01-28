import React, { useState } from 'react';

export const CheckOut = () => {
  const months = [
    'Select Months',
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const [selectedMonth, setSelectedMonth] = useState(months[0]);
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleOptionClick = (month) => {
    setSelectedMonth(month);
    setShowOptions(false);
  };

  return (
    <div className="container checkOut">
      <div className="d_flex">
        <div className="clientInfo">
          <div className="customerInfo">
            <h3>Customer Info</h3>

            <form id="personalInfo" className="d_flex">
              <div className="dc_flex">
                <label>Name:</label>
                <input type="text" name="name" placeholder="Name" required />
              </div>
              <div className="dc_flex">
                <label>Email:</label>
                <input type="email" name="email" placeholder="email" required />
              </div>
              <div className="dc_flex">
                <label>Phone:</label>
                <input
                  type="number"
                  name="Phone"
                  placeholder="Phone"
                  required
                />
              </div>
            </form>

            <form id="address" className="d_flex">
              <div className="dc_flex">
                <label>Address:</label>
                <input
                  className="address"
                  type="text"
                  name="address"
                  placeholder="Address"
                  required
                />
              </div>
              <div className="dc_flex">
                <label>Zip:</label>
                <input
                  type="number"
                  name="zip"
                  placeholder="Zip code"
                  required
                />
              </div>
            </form>
          </div>

          <div className="PaymentInfo">
            <h3>Payment Info</h3>

            <form id="CardInfo" className="d_flex">
              <div className="dc_flex">
                <label>Name on Card:</label>
                <input type="text" name="Name" placeholder="Name" required />
              </div>

              <div className="dc_flex">
                <label>Card Number:</label>
                <input
                  type="number"
                  name="name"
                  placeholder="1234 1234 1234"
                  required
                />
              </div>

              <div className="dc_flex">
                <label>CVC:</label>
                <input type="number" name="cvc" placeholder="123" required />
              </div>
            </form>

            <form id="cardDate" className="f_flex cardDate">
              <div className="dc_flex">
                <label>Month</label>
                <button className="select" onClick={toggleOptions}>
                  {selectedMonth}
                </button>
                {showOptions && (
                  <ul>
                    {months.map((month) => (
                      <li key={month} onClick={() => handleOptionClick(month)}>
                        {month}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="dc_flex">
                <label>Zip:</label>
                <input
                  type="number"
                  name="zip"
                  placeholder="Zip code"
                  required
                />
              </div>
            </form>
          </div>
        </div>

        <div className="currentCart">currentCart</div>
      </div>
    </div>
  );
};
