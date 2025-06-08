import React, { useEffect, useState } from 'react'
import { FaChevronLeft, FaSpinner, FaStar } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { addToCart } from '../redux/cartSlice'

const ProductDetail = () => {
    const { id } = useParams()
    const { products } = useSelector(state => state.product)
    const [product, setProduct] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        const newProduct = products.find(product => product.id == id)
        setProduct(newProduct)
    }, [products, id])

    const handleAddToCart = (e, product) => {
        e.stopPropagation()
        e.preventDefault()
        setIsLoading(true)
        dispatch(addToCart(product))
        setTimeout(() => {
            setIsLoading(false)
        }, 300);
    }

    return (
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <button
                onClick={() => navigate(-1)}
                className="flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors duration-200"
            >
                <FaChevronLeft className="mr-2" />
                Back to products
            </button>

            <div className="bg-white p-6 shadow rounded-lg border transform transition-all duration-300">
                <div className="md:flex gap-8">
                    {/* Image Gallery */}
                    <div className="md:w-1/2">
                        <div className="bg-gray-50 rounded-lg p-4 mb-4">
                            <img
                                src={product?.images?.[selectedImage] || product?.image}
                                alt={product?.name}
                                className="w-full h-80 object-contain"
                            />
                        </div>
                        <div className="flex gap-2 overflow-x-auto pb-2">
                            {product?.images?.length > 1 ? (
                                product?.images.map((img, index) => (
                                    <img
                                        key={index}
                                        src={img}
                                        alt={`${product?.name} ${index + 1}`}
                                        className={`w-16 h-16 object-contain border rounded cursor-pointer ${selectedImage === index ? 'border-blue-500' : 'border-gray-200'
                                            }`}
                                        onClick={() => setSelectedImage(index)}
                                    />
                                ))
                            ) : (
                                <img
                                    src={product?.image}
                                    alt={product?.name}
                                    className="w-16 h-16 object-contain border border-gray-200 rounded"
                                />
                            )}
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="md:w-1/2 mt-6 md:mt-0">
                        <h1 className="text-2xl font-bold text-gray-900 mb-2">{product?.name}</h1>

                        <div className="flex items-center mb-4">
                            <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} className="text-yellow-500" />
                                ))}
                            </div>
                            <span className="text-gray-500 text-sm ml-2">(24 reviews)</span>
                        </div>

                        <p className="text-3xl font-semibold text-gray-900 mb-6">${product?.price}</p>

                        <p className="text-gray-700 mb-6">{product?.description || "No description available."}</p>

                        <div className="mb-6">
                            <h3 className="text-sm font-medium text-gray-900">Details</h3>
                            <div className="mt-2 text-sm text-gray-500">
                                <p>Material: {product?.material || 'Not specified'}</p>
                                <p>Dimensions: {product?.dimensions || 'Not specified'}</p>
                                <p>Weight: {product?.weight || 'Not specified'}</p>
                            </div>
                        </div>

                        <button
                            onClick={(e) => handleAddToCart(e, product)}
                            className="flex items-center justify-center w-full mb-4 md:w-64 h-12 bg-red-600 text-white text-sm rounded-full hover:bg-red-700 transition-all duration-300 cursor-pointer"
                        >
                            {isLoading ? (
                                <FaSpinner className="animate-spin" />
                            ) : (
                                'Add to cart'
                            )}
                        </button>
                        <button
                            onClick={() => navigate('/cart')}
                            className="flex items-center justify-center w-full md:w-64 h-12 bg-red-600 text-white text-sm rounded-full hover:bg-red-700 transition-all duration-300 cursor-pointer"
                        >
                            Go to cart
                        </button>
                    </div>
                </div>

                {/* Additional Info */}
                <div className="mt-12 border-t pt-8">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Product Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-sm font-medium text-gray-900">Features</h3>
                            <ul className="mt-2 text-sm text-gray-500 list-disc pl-5">
                                {product?.features?.length > 0 ? (
                                    product?.features.map((feature, i) => (
                                        <li key={i}>{feature}</li>
                                    ))
                                ) : (
                                    <li>No features specified</li>
                                )}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-medium text-gray-900">Specifications</h3>
                            <div className="mt-2 text-sm text-gray-500">
                                <p>Brand: {product?.brand || 'Not specified'}</p>
                                <p>SKU: {product?.sku || 'Not specified'}</p>
                                <p>Availability: {product?.stock > 0 ? 'In stock' : 'Out of stock'}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail