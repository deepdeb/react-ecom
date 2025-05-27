import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EmptyCart from '../assets/Images/emptycart.png';
import { FaTrashAlt } from 'react-icons/fa';
import Modal from '../components/Modal';
import ChangeAddress from '../components/ChangeAddress';
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../redux/cartSlice';

const Cart = () => {
    const { products, totalQuantity, totalPrice } = useSelector(state => state.cart);
    const [address, setAddress] = useState('13/4 Main Street, Third Cross, Jackson Ville');
    const [isModalOpen, setIsModalOpen] = useState(false)
    const dispatch = useDispatch()

    const handleRemoveFromCart = (product) => {
        dispatch(removeFromCart(product))
    }

    return (
        <div className="min-h-screen bg-gray-50 py-10">

            {/* modal */}
            <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
                <ChangeAddress setAddress={setAddress} setIsModalOpen={setIsModalOpen} />
            </Modal>

            {products.length > 0 ? (
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-semibold text-gray-800 mb-10">Shopping Cart</h1>

                    {/* Cart Items */}
                    <div className="bg-white shadow-sm rounded-xl overflow-hidden mb-10">
                        <div className="grid grid-cols-12 bg-gray-100 text-gray-700 text-sm font-semibold p-4">
                            <div className="col-span-5">Product</div>
                            <div className="col-span-2 text-center">Price</div>
                            <div className="col-span-2 text-center">Quantity</div>
                            <div className="col-span-2 text-center">Subtotal</div>
                            <div className="col-span-1 text-center">Remove</div>
                        </div>

                        {products.map((product) => (
                            <div key={product.id} className="grid grid-cols-12 items-center p-4 border-t">
                                <div className="col-span-5 flex items-center space-x-4">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-16 h-16 object-contain rounded"
                                    />
                                    <span className="text-gray-800">{product.name}</span>
                                </div>
                                <div className="col-span-2 text-center text-gray-700">${product.price.toFixed(2)}</div>
                                <div className="col-span-2 flex justify-center items-center">
                                    <button className="px-3 py-1 border border-gray-300 rounded-l hover:bg-gray-100" onClick={() => dispatch(decreaseQuantity(product))}>-</button>
                                    <span className="px-4 py-1 border-t border-b border-gray-300">{product.quantity}</span>
                                    <button className="px-3 py-1 border border-gray-300 rounded-r hover:bg-gray-100" onClick={() => dispatch(increaseQuantity(product))}>+</button>
                                </div>
                                <div className="col-span-2 text-center text-gray-700">
                                    ${(product.quantity * product.price).toFixed(2)}
                                </div>
                                <div className="col-span-1 flex justify-center">
                                    <button className="text-red-500 hover:text-red-700" onClick={() => handleRemoveFromCart(product)}>
                                        <FaTrashAlt />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Cart Totals */}
                    <div className="bg-white shadow-sm rounded-xl p-6">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cart Totals</h2>

                        <div className="space-y-4 text-sm text-gray-700">
                            <div className="flex justify-between border-b pb-2">
                                <span>Total Items:</span>
                                <span>{totalQuantity}</span>
                            </div>

                            <div>
                                <h3 className="font-medium mb-1">Shipping Address:</h3>
                                <p className="text-gray-600 mb-1">{address}</p>
                                <button className="text-blue-600 hover:underline text-sm" onClick={() => setIsModalOpen(true)}>
                                    Change Address
                                </button>
                            </div>

                            <div className="flex justify-between border-t pt-4 font-semibold text-lg text-gray-800">
                                <span>Total Price:</span>
                                <span>${totalPrice.toFixed(2)}</span>
                            </div>
                        </div>

                        <button className="mt-6 w-full bg-red-600 hover:bg-red-700 text-white text-center py-3 rounded-lg font-medium">
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center px-4 py-20 text-center">
                    <img src={EmptyCart} alt="Empty cart" className="h-80 mb-6" />
                    <p className="text-gray-600 text-lg mb-6">Looks like your cart is empty.</p>
                    <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium">
                        Continue Shopping
                    </button>
                </div>
            )}
        </div>
    );
};

export default Cart;
