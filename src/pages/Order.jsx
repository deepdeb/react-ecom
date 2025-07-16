import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../redux/cartSlice';

const OrderConfirmation = ({order}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  console.log(order)

  const paymentMode = order?.paymentMode;
  const orderId = order?.orderNumber;
  const shippingInfo = order?.shippingInformation
  const products = order?.products
  const totalPrice = order?.totalPrice

  useEffect(() => {
    dispatch(clearCart())
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl font-semibold text-green-600 mb-2">Thank You!</h1>
        <p className="text-lg text-gray-700 mb-4">Your order <strong>{orderId}</strong> has been placed successfully.</p>

        <div className="bg-white shadow-sm rounded-xl p-6 text-left space-y-6">
          {/* Shipping Info */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Shipping Information</h2>
            <p className="text-gray-700">
              {shippingInfo?.address}, {shippingInfo?.city}, {shippingInfo?.zip}
            </p>
          </div>

          {/* Payment Info */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Payment Method</h2>
            <p className="text-gray-700">{paymentMode}</p>
          </div>

          {/* Items Ordered */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Items Ordered</h2>
            {products?.map((product) => (
              <div key={product.id} className="flex items-center gap-4 mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-14 h-14 object-contain border rounded"
                />
                <div className="flex-1">
                  <p className="font-medium text-gray-800">{product.name}</p>
                  <p className="text-sm text-gray-500">Qty: {product.quantity}</p>
                </div>
                <div className="text-gray-800 font-semibold">${product.totalPrice}</div>
              </div>
            ))}
            <hr className="my-4" />
            <div className="flex justify-between text-lg font-semibold text-gray-800">
              <span>Total:</span>
              <span>${totalPrice?.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <button
            onClick={() => navigate('/shop')}
            className="bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg text-lg font-medium transition"
          >
            Continue Shopping
          </button>
          <button
            onClick={() => navigate('/track-order/' + orderId)}
            className="bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg text-lg font-medium transition"
          >
            Track Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
