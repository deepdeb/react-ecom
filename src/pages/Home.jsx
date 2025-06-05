import { Categories } from '../assets/mockData'
import HeroImage from '../assets/Images/hero-page.png'
import InfoSection from '../components/InfoSection'
import CategorySection from '../components/CategorySection'
import { useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'
import Shop from './Shop'

const Home = () => {
  const { products } = useSelector(state => state.product)

  return (
    <div className="bg-gray-50">
      <div className="mt-4 px-4 md:px-16 lg:px-24">
        <div className="container mx-auto py-6 flex flex-col md:flex-row gap-6">

          <div className="container mx-auto px-4 py-8">
            {/* Hero Section */}
            <div className="w-full relative h-96 rounded-lg overflow-hidden shadow-lg mb-12">
              <img className="h-full w-full object-cover" src={HeroImage} alt="Hero" />
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center max-w-lg">
                <h2 className="text-4xl font-extrabold leading-snug drop-shadow-lg">WELCOME TO MY E-COMM SHOP</h2>
                <p className="text-lg font-semibold mt-3 drop-shadow-md">CHOOSE FROM THOUSANDS OF PRODUCTS</p>
                <button className="mt-5 bg-red-600 hover:bg-red-700 transition-all duration-300 text-white px-6 py-2 rounded shadow hover:scale-105">
                  SHOP NOW
                </button>
              </div>
            </div>

            {/* Categories Section */}
            <div className="w-full text-center">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Shop By Category</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {Categories.map((category, index) => (
                  <button
                    key={index}
                    className="bg-white shadow-md rounded-lg px-6 py-3 text-sm font-medium text-gray-700 hover:bg-red-600 hover:text-white transition-colors duration-300 transform hover:scale-105"
                  >
                    {category}
                  </button>
                ))}
              </div>
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