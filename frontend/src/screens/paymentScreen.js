// components/PaymentScreen.js
import React, { useState } from 'react';

const PaymentScreen = () => {
  const [paymentMethod, setPaymentMethod] = useState('PayPal');

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handlePayment = () => {
    // Handle payment processing here
  };

  return (
    <div>
      <h1>Payment Method</h1>
      <form>
        <label>
          <input
            type="radio"
            name="paymentMethod"
            value="PayPal"
            checked={paymentMethod === 'PayPal'}
            onChange={handlePaymentMethodChange}
          />
          PayPal
        </label>
        <label>
          <input
            type="radio"
            name="paymentMethod"
            value="CreditCard"
            checked={paymentMethod === 'CreditCard'}
            onChange={handlePaymentMethodChange}
          />
          Credit Card
        </label>
        <button type="button" onClick={handlePayment}>
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default PaymentScreen;
