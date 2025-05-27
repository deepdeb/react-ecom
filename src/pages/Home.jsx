import { Categories } from '../assets/mockData'
import HeroImage from '../assets/Images/hero-page.png'
import InfoSection from '../components/InfoSection'
import CategorySection from '../components/CategorySection'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'
import Shop from './Shop'

const Home = () => {
  const dispatch = useDispatch()
  const { products } = useSelector(state => state.product)

  return (
    <div className="bg-gray-50">
      <div className="mt-4 px-4 md:px-16 lg:px-24">
        <div className="container mx-auto py-6 flex flex-col md:flex-row gap-6">
          
          {/* Sidebar */}
          <div className="w-full md:w-3/12">
            <div className="bg-red-600 text-white text-sm font-semibold px-4 py-3 rounded-t-md">
              Shop By Categories
            </div>
            <ul className="space-y-3 bg-white shadow rounded-b-md px-4 py-5">
              {Categories.map((category, index) => (
                <li key={index} className="flex items-center text-sm text-gray-700 font-medium hover:text-red-600 transition-colors">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  {category}
                </li>
              ))}
            </ul>
          </div>

          {/* Hero Section */}
          <div className="w-full md:w-9/12 relative h-96 rounded-lg overflow-hidden shadow-lg">
            <img className="h-full w-full object-cover" src={HeroImage} alt="Hero" />
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute top-14 left-10 z-10 text-white max-w-lg">
              {/* <p className="text-sm mb-2 tracking-wide">Pradeep Codes</p> */}
              <h2 className="text-4xl font-extrabold leading-snug drop-shadow-lg mt-4">WELCOME TO MY E-COMM SHOP</h2>
              <p className="text-lg font-semibold mt-3 drop-shadow-md">CHOOSE FROM THOUSANDS OF PRODUCTS</p>
              <button className="mt-5 bg-red-600 hover:bg-red-700 transition-all duration-300 text-white px-6 py-2 rounded shadow hover:scale-105">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>

        {/* Info and Category Sections */}
        <div className="mt-12">
          <InfoSection />
        </div>
        <div className="mt-12">
          <CategorySection />
        </div>

        {/* Top Products */}
        <div className="container mx-auto py-16">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">Top Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {products.slice(0, 5).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>

      {/* Shop Section */}
      <div className="mt-12">
        <Shop />
      </div>
    </div>
  )
}

export default Home