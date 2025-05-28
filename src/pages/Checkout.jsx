import React, { useState } from 'react';

const Checkout = () => {
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

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-semibold text-gray-800 mb-10">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Billing */}
            <div className="bg-white shadow-sm rounded-xl">
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

            {/* Shipping */}
            <div className="bg-white shadow-sm rounded-xl">
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
                  />
                  <input
                    type="text"
                    placeholder="Enter City"
                    className="w-full border border-gray-300 rounded p-2"
                  />
                  <input
                    type="text"
                    placeholder="Enter Pin Code"
                    className="w-full border border-gray-300 rounded p-2"
                  />
                </div>
              )}
            </div>

            {/* Payment */}
            <div className="bg-white shadow-sm rounded-xl">
              <div
                className="p-4 border-b flex justify-between items-center cursor-pointer bg-gray-100"
                onClick={() => toggleSection('payment')}
              >
                <h2 className="text-lg font-semibold text-gray-800">Payment Method</h2>
                <span>{openSection.payment ? '−' : '+'}</span>
              </div>
              {openSection.payment && (
                <div className="p-4">
                  <select className="w-full border border-gray-300 rounded p-2">
                    <option value="">Select Payment Method</option>
                    <option value="card">Credit/Debit Card</option>
                    <option value="paypal">PayPal</option>
                    <option value="cod">Cash on Delivery</option>
                  </select>
                </div>
              )}
            </div>
          </div>

          {/* Right Section */}
          <div className="bg-white shadow-sm rounded-xl p-6 self-start">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Order Summary</h2>
            <div className="flex items-center mb-4">
              <img
                src="https://via.placeholder.com/60"
                alt="Product"
                className="w-16 h-16 object-cover mr-4"
              />
              <div>
                <p className="font-medium text-gray-800">Product 3</p>
                <p className="text-sm text-gray-600">$19.99 x 1</p>
              </div>
              <div className="ml-auto font-medium text-gray-800">$19.99</div>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between text-lg font-semibold text-gray-800">
              <span>Total Price:</span>
              <span>$19.99</span>
            </div>
            <button className="mt-6 w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-medium">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
