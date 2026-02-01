import React from 'react';
import { ArrowRight, Star, TrendingUp, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { Product } from '../types';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  // Sample trending products (in real app, fetch from API)
  const trendingProducts: Product[] = [
    {
      id: '1',
      name: 'Air Max 270 React',
      description: 'Premium running shoes with React foam technology',
      price: 12999,
      originalPrice: 15999,
      images: ['https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg'],
      category: 'running',
      gender: 'unisex',
      sport: 'running',
      colors: ['black', 'white'],
      sizes: ['7', '8', '9', '10', '11'],
      isTrending: true,
      createdAt: new Date().toISOString(),
    },
    {
      id: '2',
      name: 'UltraBoost 22',
      description: 'Energy-returning running shoes',
      price: 16999,
      images: ['https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg'],
      category: 'running',
      gender: 'men',
      sport: 'running',
      colors: ['blue', 'white'],
      sizes: ['8', '9', '10', '11', '12'],
      isNew: true,
      createdAt: new Date().toISOString(),
    },
    {
      id: '3',
      name: 'Jordan Retro High',
      description: 'Classic basketball shoes with premium leather',
      price: 18999,
      images: ['https://images.pexels.com/photos/1280064/pexels-photo-1280064.jpeg'],
      category: 'basketball',
      gender: 'unisex',
      sport: 'basketball',
      colors: ['red', 'black', 'white'],
      sizes: ['7', '8', '9', '10', '11', '12'],
      isTrending: true,
      createdAt: new Date().toISOString(),
    },
    {
      id: '4',
      name: 'Chuck Taylor All Star',
      description: 'Timeless lifestyle sneakers',
      price: 4999,
      images: ['https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg'],
      category: 'lifestyle',
      gender: 'unisex',
      sport: 'lifestyle',
      colors: ['black', 'white', 'red'],
      sizes: ['6', '7', '8', '9', '10', '11'],
      createdAt: new Date().toISOString(),
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="/solestyle.mp4"
            type="video/mp4"
          />
          {/* Fallback image if video fails to load */}
          <img
            src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
        </video>
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Step Into
            <span className="block bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Excellence
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Discover premium athletic footwear designed for performance and style
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/products')}
              className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center group"
            >
              Shop Now
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <button 
              onClick={() => navigate('/products?gender=men')}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300"
            >
              Explore Collection
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4">
                <Star className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">4.8/5</h3>
              <p className="text-gray-600">Customer Rating</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">10M+</h3>
              <p className="text-gray-600">Shoes Sold</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">2M+</h3>
              <p className="text-gray-600">Happy Customers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div 
              className="relative h-64 rounded-lg overflow-hidden cursor-pointer group"
              onClick={() => navigate('/products?gender=men')}
            >
              <img
                src="https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg"
                alt="Men's Shoes"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold">Men's Shoes</h3>
              </div>
            </div>
            <div 
              className="relative h-64 rounded-lg overflow-hidden cursor-pointer group"
              onClick={() => navigate('/products?gender=women')}
            >
              <img
                src="https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg"
                alt="Women's Shoes"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold">Women's Shoes</h3>
              </div>
            </div>
            <div 
              className="relative h-64 rounded-lg overflow-hidden cursor-pointer group"
              onClick={() => navigate('/products?gender=kids')}
            >
              <img
                src="https://images.pexels.com/photos/1280064/pexels-photo-1280064.jpeg"
                alt="Kids' Shoes"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold">Kids' Shoes</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold">Trending Now</h2>
            <button 
              onClick={() => navigate('/products')}
              className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
            >
              View All
              <ArrowRight className="ml-1" size={16} />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Stay in the Loop</h2>
          <p className="text-gray-300 mb-8">
            Be the first to know about new releases, exclusive offers, and styling tips.
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;