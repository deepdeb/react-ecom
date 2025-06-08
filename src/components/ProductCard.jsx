import React, { useState } from 'react'
import { FaSpinner, FaStar } from 'react-icons/fa'
import { addToCart } from '../redux/cartSlice'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'


const ProductCard = ({ product }) => {
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)

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
    <Link to={`/product/${product.id}`}>
      <div className="bg-white p-4 shadow rounded relative border transform transition-transform duration-300 hover:scale-105">
        <img src={product.image} alt={product.name} className="w-full h-48 object-contain mb-4" />
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-500">${product.price}</p>
        <div className="flex items-center mt-2">
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
        </div>
        <div className="absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 bg-red-600 group text-white text-sm rounded-full hover:w-32 hover:bg-red-700 transition-all duration-100 cursor-pointer" onClick={(e) => handleAddToCart(e, product)}>
          <span className="group-hover:hidden">+</span>
          <span className="hidden group-hover:block">{isLoading ? <FaSpinner className="animate-spin" /> : 'Add to cart'}</span>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard