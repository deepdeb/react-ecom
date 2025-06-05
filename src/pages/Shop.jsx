import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'

const Shop = () => {
    const { products } = useSelector(state => state.product)
    return (
        <div className='mx-auto px-4 md:px-16 lg:px-24 my-20'>
            <h2 className='text-3xl font-bold mb-10 text-center text-gray-800'>Shop</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 cursor-pointer'>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default Shop