import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Checkout = ({setOrder}) => {
  const navigate = useNavigate()
  const [paymentMode, setPaymentMode] = useState('');
  const [shippingInfo, setShippingInfo] = useState({address: '', city: '', zip: ''})
  const [openSection, setOpenSection] = useState({
    billing: true,
    shipping: false,
    payment: false,
  });

  const toggleSection = (section) => {
    setOpenSection((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const { products, totalPrice } = useSelector(state => state.cart);

  const handleOrder = () => {
    const newOrder = {
      products: products,
      orderNumber: (Math.floor(Math.random() * (9999999999 - 1000000000 + 1)) + 1000000000).toString(),
      shippingInformation: shippingInfo,
      totalPrice: totalPrice,
      paymentMode: paymentMode
    }

    setOrder(newOrder)
    navigate('/order')
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">Checkout</h1>

        {/* Billing Section */}
        <div className="bg-white shadow-sm rounded-xl mb-6">
          <div
            className="p-4 border-b flex justify-between items-center cursor-pointer bg-gray-100"
            onClick={() => toggleSection('billing')}
          >
            <h2 className="text-lg font-semibold text-gray-800">Billing Information</h2>
            <span>{openSection.billing ? '−' : '+'}</span>
          </div>
          {openSection.billing && (
            <div className="p-4 space-y-4">
              <input
                type="text"
                placeholder="Enter Name"
                className="w-full border border-gray-300 rounded p-2"
              />
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full border border-gray-300 rounded p-2"
              />
              <input
                type="tel"
                placeholder="Enter Phone #"
                className="w-full border border-gray-300 rounded p-2"
              />
            </div>
          )}
        </div>

        {/* Shipping Section */}
        <div className="bg-white shadow-sm rounded-xl mb-6">
          <div
            className="p-4 border-b flex justify-between items-center cursor-pointer bg-gray-100"
            onClick={() => toggleSection('shipping')}
          >
            <h2 className="text-lg font-semibold text-gray-800">Shipping Information</h2>
            <span>{openSection.shipping ? '−' : '+'}</span>
          </div>
          {openSection.shipping && (
            <div className="p-4 space-y-4">
              <input
                type="text"
                placeholder="Enter Shipping Address"
                className="w-full border border-gray-300 rounded p-2"
                onChange={(e) => setShippingInfo({...shippingInfo, address: e.target.value})}
              />
              <input
                type="text"
                placeholder="Enter City"
                className="w-full border border-gray-300 rounded p-2"
                onChange={(e) => setShippingInfo({...shippingInfo, city: e.target.value})}
              />
              <input
                type="text"
                placeholder="Enter Zip Code"
                className="w-full border border-gray-300 rounded p-2"
                onChange={(e) => setShippingInfo({...shippingInfo, zip: e.target.value})}
              />
            </div>
          )}
        </div>

        {/* Payment Section */}
        <div className="bg-white shadow-sm rounded-xl mb-10">
          <div
            className="p-4 border-b flex justify-between items-center cursor-pointer bg-gray-100"
            onClick={() => toggleSection('payment')}
          >
            <h2 className="text-lg font-semibold text-gray-800">Payment Method</h2>
            <span>{openSection.payment ? '−' : '+'}</span>
          </div>
          {openSection.payment && (
            <div className="p-4 space-y-4">
              <select
                className="w-full border border-gray-300 rounded p-2"
                value={paymentMode}
                onChange={(e) => setPaymentMode(e.target.value)}
              >
                <option value="">Select Payment Method</option>
                <option value="card">Debit Card</option>
                <option value="paypal">PayPal</option>
                <option value="cod">Cash on Delivery</option>
              </select>

              {paymentMode === 'card' && (
                <div className="mt-4 space-y-4">
                  <h3 className="text-lg font-semibold text-gray-700">Debit Card Information</h3>
                  <input
                    type="text"
                    placeholder="Enter card number"
                    className="w-full border border-gray-300 rounded p-2"
                  />
                  <input
                    type="text"
                    placeholder="Enter card holder name"
                    className="w-full border border-gray-300 rounded p-2"
                  />
                  <div className="flex space-x-4">
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="w-1/2 border border-gray-300 rounded p-2"
                    />
                    <input
                      type="text"
                      placeholder="CVV"
                      className="w-1/2 border border-gray-300 rounded p-2"
                    />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Order Summary Section (Bottom) */}
        <div className="bg-white shadow-sm rounded-xl p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Order Summary</h2>

          {products.length > 0 && products.map((product) => (
            <div key={product.id} className="flex items-center mb-5 gap-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-14 h-14 object-contain rounded border"
              />
              <div className="flex-1">
                <p className="font-medium text-gray-800">{product.name}</p>
                <p className="text-sm text-gray-500">${product.price} x {product.quantity}</p>
              </div>
              <div className="text-gray-800 font-semibold whitespace-nowrap">${product.totalPrice}</div>
            </div>
          ))}

          <hr className="my-5" />

          <div className="flex justify-between text-lg font-semibold text-gray-800 mb-6">
            <span>Total Price:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>

          <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-medium transition" onClick={handleOrder}>
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
