import React from 'react'
import { Link } from 'react-router-dom'
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const { products } = useSelector(state => state.cart)

  return (
    <nav className="bg-white shadow-md **sticky top-0 z-50**"> {/* Added sticky, top-0, and z-50 */}
      <div className="container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="text-2xl font-extrabold tracking-wide text-red-600">
          <Link to="/">Storify</Link>
        </div>

        {/* Search */}
        <div className="relative flex-1 mx-4 max-w-xl">
          <form>
            <input
              type="text"
              placeholder="Search Product.."
              className="w-full border border-gray-300 rounded-full py-2 px-5 pr-10 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-sm shadow-sm placeholder-gray-400"
            />
            <FaSearch className="absolute top-2.5 right-4 text-red-600 text-sm pointer-events-none" />
          </form>
        </div>

        {/* Right Icons */}
        <div className="flex items-center space-x-5">
          <Link to="/cart" className="relative text-gray-700 hover:text-red-600 transition">
            <FaShoppingCart className="text-xl" />
            {products.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-600 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-sm">
                {products.length}
              </span>
            )}
          </Link>
          <button className="hidden md:inline-block text-sm font-semibold text-gray-700 hover:text-red-600 transition">
            Login | Register
          </button>
          <button className="md:hidden text-gray-700 hover:text-red-600">
            <FaUser />
          </button>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="border-t border-gray-200">
        <div className="flex justify-center space-x-10 py-3 text-sm font-semibold text-gray-700">
          <Link to="/" className="hover:text-red-600 transition">Home</Link>
          <Link to="/shop" className="hover:text-red-600 transition">Shop</Link>
          <Link to="/" className="hover:text-red-600 transition">Contact</Link>
          <Link to="/" className="hover:text-red-600 transition">About</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar