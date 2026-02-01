import React, { useState } from 'react';
import { Search, ShoppingBag, User, Menu, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { isAuthenticated, user, logout } = useAuth();
  const { itemCount } = useCart();
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button
              className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <div className="ml-2 lg:ml-0">
              <img
                src="/ChatGPT Image Jul 19, 2025, 09_43_15 PM.png"
                alt="SoleStyle Logo"
                className="h-10 w-auto cursor-pointer"
                onClick={() => navigate('/')}
              />
            </div>
          </div>
          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex space-x-8">
            <button onClick={() => navigate('/products?gender=men')} className="text-gray-900 hover:text-gray-600 font-medium transition-colors">Men</button>
            <button onClick={() => navigate('/women')} className="text-gray-900 hover:text-gray-600 font-medium transition-colors">Women</button>
            <button onClick={() => navigate('/products?gender=kids')} className="text-gray-900 hover:text-gray-600 font-medium transition-colors">Kids</button>
            <button onClick={() => navigate('/products')} className="text-gray-900 hover:text-gray-600 font-medium transition-colors">All Shoes</button>
          </nav>
          {/* Search Bar - Desktop */}
          <div className="hidden md:block flex-1 max-w-md mx-8">
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search shoes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
              />
            </form>
          </div>
          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            {/* Search Icon - Mobile */}
            <button className="md:hidden p-2 text-gray-600 hover:text-gray-900">
              <Search size={20} />
            </button>
            {/* Cart */}
            <button 
              onClick={() => navigate('/cart')}
              className="relative p-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ShoppingBag size={20} />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
            {/* User Menu */}
            <div className="relative">
              {isAuthenticated ? (
                <div className="flex items-center space-x-2">
                  <button 
                    onClick={() => navigate('/dashboard')}
                    className="hidden sm:block text-sm font-medium text-gray-900 hover:text-gray-600"
                  >
                    Hi, {user?.firstName}
                  </button>
                  <button
                    onClick={handleLogout}
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <button 
                  onClick={() => navigate('/login')}
                  className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <User size={20} />
                  <span className="hidden sm:block text-sm font-medium">Login</span>
                </button>
              )}
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200">
            <div className="py-4 space-y-4">
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search shoes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                />
              </form>
              <nav className="space-y-2">
                <button 
                  onClick={() => { navigate('/products?gender=men'); setIsMenuOpen(false); }}
                  className="block w-full text-left py-2 text-gray-900 hover:text-gray-600 font-medium"
                >
                  Men
                </button>
                <button 
                  onClick={() => { navigate('/women'); setIsMenuOpen(false); }}
                  className="block w-full text-left py-2 text-gray-900 hover:text-gray-600 font-medium"
                >
                  Women
                </button>
                <button 
                  onClick={() => { navigate('/products?gender=kids'); setIsMenuOpen(false); }}
                  className="block w-full text-left py-2 text-gray-900 hover:text-gray-600 font-medium"
                >
                  Kids
                </button>
                <button 
                  onClick={() => { navigate('/products'); setIsMenuOpen(false); }}
                  className="block w-full text-left py-2 text-gray-900 hover:text-gray-600 font-medium"
                >
                  All Shoes
                </button>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;