import React from 'react';
import { FaHeadset, FaMoneyBillWave, FaLock, FaTag, FaShippingFast } from 'react-icons/fa';

const InfoSection = () => {
    const infoItems = [
        {
            icon: <FaShippingFast className="text-4xl text-red-600 mb-4" />, // Larger icon
            title: 'Free Shipping',
            description: 'Get your orders delivered with no extra cost',
        },
        {
            icon: <FaHeadset className="text-4xl text-red-600 mb-4" />,
            title: 'Support 24/7',
            description: 'We are here to assist you anytime',
        },
        {
            icon: <FaMoneyBillWave className="text-4xl text-red-600 mb-4" />,
            title: '100% Money Back',
            description: 'Full refund if you are not satisfied',
        },
        {
            icon: <FaLock className="text-4xl text-red-600 mb-4" />,
            title: 'Payment Secure',
            description: 'Your payment information is safe with us',
        },
        {
            icon: <FaTag className="text-4xl text-red-600 mb-4" />,
            title: 'Discount',
            description: 'Enjoy the best prices on our products',
        },
    ];

    return (
        <div className="bg-gray-50"> {/* Slightly lighter background for contrast */}
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Why Shop With Us?</h2> {/* Added a section title */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8"> {/* Responsive grid */}
                    {infoItems.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1" // Elevated shadow and subtle lift on hover
                        >
                            {item.icon}
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3> {/* Bolder title */}
                            <p className="text-gray-600 text-base">{item.description}</p> {/* Standard paragraph size */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default InfoSection;