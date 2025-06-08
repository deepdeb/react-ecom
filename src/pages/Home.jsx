import { Categories } from '../assets/mockData'
import HeroImage1 from '../assets/Images/shopping-woman.png'
import HeroImage2 from '../assets/Images/shopping-girl.png'
import HeroImage3 from '../assets/Images/shopping-man.png'
import InfoSection from '../components/InfoSection'
import { useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'
import Shop from './Shop'
import { useEffect, useState } from 'react'

const images = [HeroImage1, HeroImage2, HeroImage3];

const Home = () => {
  const { products } = useSelector(state => state.product)

  const [index, setIndex] = useState(0);

  // Auto-play every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gray-50">

      <div className="px-30 my-20">
        <div className="w-full relative **aspect-video** rounded-lg overflow-hidden shadow-lg mb-12">
          <img className="h-full w-full object-cover" src={images[index]} alt="Hero" />
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center max-w-lg">
            <h2 className="text-4xl font-extrabold leading-snug drop-shadow-lg">WELCOME TO MY E-COMM SHOP</h2>
            <p className="text-lg font-semibold mt-3 drop-shadow-md">CHOOSE FROM THOUSANDS OF PRODUCTS</p>
            <button className="mt-5 bg-red-600 hover:bg-red-700 transition-all duration-300 text-white px-6 py-2 rounded shadow hover:scale-105">
              SHOP NOW
            </button>
          </div>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {images.map((_, i) => (
              <button
                key={i}
                className={`w-3 h-3 rounded-full ${index === i ? "bg-white" : "bg-white/50"
                  }`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className='mx-auto my-20 px-4 md:px-16 lg:px-24'>
        <div className="w-full text-center">
          {/* Consistent heading style */}
          <h2 className="text-3xl font-bold mb-10 text-gray-800">Shop By Category</h2>
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

      {/* Info */}
      <div className="my-20">
        <InfoSection />
      </div>

      {/* Top Products */}
      <div className="container mx-auto my-20">
        <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">Top Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {products.slice(0, 5).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Shop Section */}
      <div>
        <Shop />
      </div>
    </div>
  )
}

export default Home