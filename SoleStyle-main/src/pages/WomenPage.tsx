import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { Product } from '../types';

const WomenPage: React.FC = () => {
  const navigate = useNavigate();

  // Sample women's products
  const womenProducts: Product[] = [
    {
      id: 'w1',
      name: 'Ultraboost 22 Shoes',
      description: 'Women\'s running shoes with responsive cushioning',
      price: 16999,
      originalPrice: 19999,
      images: ['https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg'],
      category: 'running',
      gender: 'women',
      sport: 'running',
      colors: ['white', 'pink', 'black'],
      sizes: ['5', '6', '7', '8', '9', '10'],
      isNew: true,
      createdAt: new Date().toISOString(),
    },
    {
      id: 'w2',
      name: 'Stan Smith Shoes',
      description: 'Iconic tennis shoes with clean design',
      price: 8999,
      images: ['https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg'],
      category: 'lifestyle',
      gender: 'women',
      sport: 'tennis',
      colors: ['white', 'green'],
      sizes: ['5', '6', '7', '8', '9'],
      createdAt: new Date().toISOString(),
    },
    {
      id: 'w3',
      name: 'NMD_R1 Shoes',
      description: 'Street-ready shoes with Boost cushioning',
      price: 13999,
      originalPrice: 15999,
      images: ['https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg'],
      category: 'lifestyle',
      gender: 'women',
      sport: 'lifestyle',
      colors: ['black', 'white', 'pink'],
      sizes: ['5', '6', '7', '8', '9', '10'],
      isTrending: true,
      createdAt: new Date().toISOString(),
    },
    {
      id: 'w4',
      name: 'Gazelle Shoes',
      description: 'Retro-inspired suede shoes',
      price: 7999,
      images: ['https://images.pexels.com/photos/1280064/pexels-photo-1280064.jpeg'],
      category: 'lifestyle',
      gender: 'women',
      sport: 'lifestyle',
      colors: ['pink', 'blue', 'gray'],
      sizes: ['5', '6', '7', '8', '9'],
      createdAt: new Date().toISOString(),
    },
    {
      id: 'w5',
      name: 'Supernova+ Shoes',
      description: 'Comfortable running shoes for daily training',
      price: 11999,
      images: ['https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg'],
      category: 'running',
      gender: 'women',
      sport: 'running',
      colors: ['purple', 'white'],
      sizes: ['5', '6', '7', '8', '9', '10'],
      createdAt: new Date().toISOString(),
    },
    {
      id: 'w6',
      name: 'Forum Low Shoes',
      description: 'Basketball-inspired lifestyle shoes',
      price: 9999,
      images: ['https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg'],
      category: 'lifestyle',
      gender: 'women',
      sport: 'basketball',
      colors: ['white', 'black'],
      sizes: ['5', '6', '7', '8', '9'],
      createdAt: new Date().toISOString(),
    },
  ];

  const categories = [
    {
      title: 'Running',
      subtitle: 'Performance shoes for every run',
      image: 'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg',
      link: '/products?gender=women&sport=running'
    },
    {
      title: 'Lifestyle',
      subtitle: 'Everyday comfort and style',
      image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg',
      link: '/products?gender=women&sport=lifestyle'
    },
    {
      title: 'Training',
      subtitle: 'Versatile shoes for any workout',
      image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg',
      link: '/products?gender=women&sport=training'
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gradient-to-r from-pink-50 to-purple-50 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg"
            alt="Women's Collection"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              WOMEN'S
              <span className="block text-pink-300">COLLECTION</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Discover shoes designed for the modern woman. Performance meets style.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => navigate('/products?gender=women')}
                className="bg-white text-black px-8 py-4 rounded-none font-bold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center group"
              >
                SHOP WOMEN'S
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button 
                onClick={() => navigate('/products?gender=women&sport=running')}
                className="border-2 border-white text-white px-8 py-4 rounded-none font-bold hover:bg-white hover:text-black transition-all duration-300"
              >
                SHOP RUNNING
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Banner */}
      <section className="py-0">
        <div className="relative h-96 bg-gradient-to-r from-purple-600 to-pink-600">
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
            <div className="text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">ULTRABOOST 22</h2>
              <p className="text-xl mb-6">The most responsive running experience yet</p>
              <button 
                onClick={() => navigate('/products?search=ultraboost')}
                className="bg-white text-black px-8 py-3 rounded-none font-bold hover:bg-gray-100 transition-colors"
              >
                SHOP NOW
              </button>
            </div>
            <div className="hidden lg:block">
              <img
                src="https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg"
                alt="Ultraboost 22"
                className="w-80 h-80 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">SHOP BY CATEGORY</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div 
                key={index}
                className="relative h-80 group cursor-pointer overflow-hidden"
                onClick={() => navigate(category.link)}
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <h3 className="text-white text-2xl font-bold mb-2">{category.title}</h3>
                  <p className="text-gray-200 mb-4">{category.subtitle}</p>
                  <button className="bg-white text-black px-6 py-2 rounded-none font-bold w-fit hover:bg-gray-100 transition-colors">
                    SHOP NOW
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-black">TRENDING NOW</h2>
            <button 
              onClick={() => navigate('/products?gender=women')}
              className="text-black hover:text-gray-600 font-bold flex items-center border-b-2 border-black hover:border-gray-600 transition-colors"
            >
              VIEW ALL
              <ArrowRight className="ml-1" size={16} />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {womenProducts.slice(0, 4).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-black">NEW ARRIVALS</h2>
            <button 
              onClick={() => navigate('/products?gender=women&sortBy=newest')}
              className="text-black hover:text-gray-600 font-bold flex items-center border-b-2 border-black hover:border-gray-600 transition-colors"
            >
              VIEW ALL
              <ArrowRight className="ml-1" size={16} />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {womenProducts.slice(2, 6).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Banner */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-64 bg-green-600 rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            <div className="relative z-10 h-full flex items-center justify-center text-center">
              <div className="text-white">
                <h2 className="text-4xl font-bold mb-4">END PLASTIC WASTE</h2>
                <p className="text-xl mb-6">Shoes made with recycled materials</p>
                <button 
                  onClick={() => navigate('/products?gender=women&search=sustainable')}
                  className="bg-white text-black px-8 py-3 rounded-none font-bold hover:bg-gray-100 transition-colors"
                >
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full mx-auto mb-4">
                <Star className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-2">FREE SHIPPING</h3>
              <p className="text-gray-300">On orders over ₹2,999</p>
            </div>
            <div>
              <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full mx-auto mb-4">
                <Star className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-2">30-DAY RETURNS</h3>
              <p className="text-gray-300">Easy returns and exchanges</p>
            </div>
            <div>
              <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full mx-auto mb-4">
                <Star className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-2">MEMBER BENEFITS</h3>
              <p className="text-gray-300">Exclusive access and rewards</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WomenPage;