import React, { useState } from 'react';

const ChangeAddress = ({ setAddress, setIsModalOpen }) => {
    const [newAddress, setNewAddress] = useState('');

    const setAddressAndClose = () => {
        if (newAddress.trim()) {
            setAddress(newAddress.trim());
            setIsModalOpen(false);
        }
    };

    return (
        <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
            <label className="block text-sm font-medium text-gray-700 mb-2">
                New Shipping Address
            </label>
            <input
                type="text"
                placeholder="Enter new address"
                value={newAddress}
                onChange={(e) => setNewAddress(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-6 text-sm"
            />

            <div className="flex justify-end space-x-3">
                <button
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
                    onClick={() => setIsModalOpen(false)}
                >
                    Cancel
                </button>
                <button
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    onClick={setAddressAndClose}
                >
                    Save Address
                </button>
            </div>
        </div>
    );
};

export default ChangeAddress;