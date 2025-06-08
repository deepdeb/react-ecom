import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'
import EmptyBox from '../assets/Images/404-error.png'

const FilterData = () => {
    const { filteredData } = useSelector(state => state.product)
    return (
        <div className='mx-auto px-4 md:px-16 lg:px-24 my-20'>
            <h2 className='text-3xl font-bold mb-10 text-center text-gray-800'>Shop</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 cursor-pointer'>
                {filteredData.length > 0 ? (filteredData.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))) : (
                    <div className="col-span-full flex flex-col items-center justify-center py-12">
                        <img
                            src={EmptyBox}
                            alt="Empty box"
                            className="h-40 w-40 text-gray-400 mb-4 animate-bounce"
                        />
                        <h3 className="text-xl font-medium text-gray-600 mb-2">No products available</h3>
                    </div>
                )}
            </div>
        </div>
    )
}

export default FilterData