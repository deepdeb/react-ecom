import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Checkout = ({ setOrder }) => {
  const navigate = useNavigate();
  const [paymentMode, setPaymentMode] = useState('');
  const [shippingInfo, setShippingInfo] = useState({
    address: '',
    city: '',
    zip: ''
  });
  const [billingInfo, setBillingInfo] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [errors, setErrors] = useState({});
  const [openSection, setOpenSection] = useState({
    billing: true,
    shipping: false,
    payment: false,
  });

  const { products, totalPrice } = useSelector(state => state.cart);

  const validateForm = () => {
    const newErrors = {};

    // Billing validation
    // if (!billingInfo.name.trim()) newErrors.name = 'Name is required';
    // if (!billingInfo.email.trim()) newErrors.email = 'Email is required';
    // if (!billingInfo.phone.trim()) newErrors.phone = 'Phone is required';

    // Shipping validation
    if (!shippingInfo.address.trim()) newErrors.address = 'Address is required';
    if (!shippingInfo.city.trim()) newErrors.city = 'City is required';
    if (!shippingInfo.zip.trim()) newErrors.zip = 'Zip code is required';

    // Payment validation
    if (!paymentMode) newErrors.paymentMode = 'Payment method is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleOrder = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      // Open all sections if there are errors
      setOpenSection({
        billing: true,
        shipping: true,
        payment: true
      });
      return;
    }

    const newOrder = {
      products: products,
      orderNumber: (Math.floor(Math.random() * (9999999999 - 1000000000 + 1)) + 1000000000).toString(),
      shippingInformation: shippingInfo,
      billingInformation: billingInfo,
      totalPrice: totalPrice,
      paymentMode: paymentMode
    };

    setOrder(newOrder);
    navigate('/order');
  };

  const toggleSection = (section) => {
    setOpenSection((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

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
              <div>
                <input
                  type="text"
                  placeholder="Enter Name"
                  className={`w-full border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded p-2`}
                  value={billingInfo.name}
                  onChange={(e) => setBillingInfo({ ...billingInfo, name: e.target.value })}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Enter Email"
                  className={`w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded p-2`}
                  value={billingInfo.email}
                  onChange={(e) => setBillingInfo({ ...billingInfo, email: e.target.value })}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Enter Phone #"
                  className={`w-full border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded p-2`}
                  value={billingInfo.phone}
                  onChange={(e) => setBillingInfo({ ...billingInfo, phone: e.target.value })}
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>
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
              <div>
                <input
                  type="text"
                  placeholder="Enter Shipping Address"
                  className={`w-full border ${errors.address ? 'border-red-500' : 'border-gray-300'} rounded p-2`}
                  value={shippingInfo.address}
                  onChange={(e) => {
                    setShippingInfo({ ...shippingInfo, address: e.target.value })
                    if (errors.address) setErrors({ ...errors, address: '' })
                  }}
                />
                {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Enter City"
                  className={`w-full border ${errors.city ? 'border-red-500' : 'border-gray-300'} rounded p-2`}
                  value={shippingInfo.city}
                  onChange={(e) => {
                    setShippingInfo({ ...shippingInfo, city: e.target.value })
                    if (errors.city) setErrors({ ...errors, city: '' })
                  }}
                />
                {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Enter Zip Code"
                  className={`w-full border ${errors.zip ? 'border-red-500' : 'border-gray-300'} rounded p-2`}
                  value={shippingInfo.zip}
                  onChange={(e) => {
                    const value = e.target.value
                    setShippingInfo({ ...shippingInfo, zip: value })
                    if (errors.zip && value.length === 6) {
                      setErrors({...errors, zip: ''})
                    }
                  }}
                />
                {errors.zip && <p className="text-red-500 text-sm mt-1">{errors.zip}</p>}
              </div>
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
              <div>
                <select
                  className={`w-full border ${errors.paymentMode ? 'border-red-500' : 'border-gray-300'} rounded p-2`}
                  value={paymentMode}
                  onChange={(e) => {
                    setPaymentMode(e.target.value)
                    if(errors.paymentMode) setErrors({...errors, paymentMode: ''})
                  }}
                >
                  <option value="">Select Payment Method</option>
                  <option value="card">Debit Card</option>
                  <option value="paypal">PayPal</option>
                  <option value="cod">Cash on Delivery</option>
                </select>
                {errors.paymentMode && <p className="text-red-500 text-sm mt-1">{errors.paymentMode}</p>}
              </div>

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

        {/* Order Summary Section */}
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

          <button
            className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-medium transition"
            onClick={handleOrder}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;