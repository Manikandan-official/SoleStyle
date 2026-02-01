import React, { useState, useEffect } from 'react';
import { Package, Heart, User, LogOut, ShoppingBag, Star, Calendar, MapPin } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Order, Product } from '../types';

const DashboardPage: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('orders');
  const [orders, setOrders] = useState<Order[]>([]);
  const [savedItems, setSavedItems] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API calls
    setIsLoading(true);
    setTimeout(() => {
      // Sample orders data
      setOrders([
        {
          id: '1',
          userId: user?.id || '',
          items: [
            {
              id: '1',
              orderId: '1',
              productId: '1',
              quantity: 1,
              size: '9',
              color: 'black',
              price: 12999,
              product: {
                id: '1',
                name: 'Air Max 270 React',
                description: 'Premium running shoes',
                price: 12999,
                images: ['https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg'],
                category: 'running',
                gender: 'unisex',
                sport: 'running',
                colors: ['black', 'white'],
                sizes: ['7', '8', '9', '10', '11'],
                createdAt: new Date().toISOString(),
              }
            }
          ],
          total: 12999,
          status: 'delivered',
          createdAt: '2025-01-15T10:30:00Z',
        },
        {
          id: '2',
          userId: user?.id || '',
          items: [
            {
              id: '2',
              orderId: '2',
              productId: '2',
              quantity: 2,
              size: '10',
              color: 'blue',
              price: 16999,
              product: {
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
                createdAt: new Date().toISOString(),
              }
            }
          ],
          total: 33998,
          status: 'shipped',
          createdAt: '2025-01-20T14:15:00Z',
        },
      ]);

      // Sample saved items
      setSavedItems([
        {
          id: '3',
          name: 'Jordan Retro High',
          description: 'Classic basketball shoes',
          price: 18999,
          images: ['https://images.pexels.com/photos/1280064/pexels-photo-1280064.jpeg'],
          category: 'basketball',
          gender: 'unisex',
          sport: 'basketball',
          colors: ['red', 'black', 'white'],
          sizes: ['7', '8', '9', '10', '11', '12'],
          createdAt: new Date().toISOString(),
        },
      ]);

      setIsLoading(false);
    }, 500);
  }, [user]);

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered': return 'bg-green-100 text-green-800';
      case 'shipped': return 'bg-blue-100 text-blue-800';
      case 'processing': return 'bg-yellow-100 text-yellow-800';
      case 'pending': return 'bg-gray-100 text-gray-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const tabs = [
    { id: 'orders', label: 'Orders', icon: Package },
    { id: 'saved', label: 'Saved Items', icon: Heart },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-black"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Welcome back, {user?.firstName}!
              </h1>
              <p className="text-gray-600">Manage your orders and account settings</p>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <LogOut size={20} />
              <span>Logout</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <nav className="space-y-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 text-left rounded-lg transition-colors ${
                        activeTab === tab.id
                          ? 'bg-black text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <Icon size={20} />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Orders Tab */}
            {activeTab === 'orders' && (
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Order History</h2>
                  
                  {orders.length === 0 ? (
                    <div className="text-center py-12">
                      <ShoppingBag className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-gray-900 mb-2">No orders yet</h3>
                      <p className="text-gray-600 mb-4">Start shopping to see your orders here</p>
                      <button
                        onClick={() => navigate('/products')}
                        className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                      >
                        Shop Now
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {orders.map((order) => (
                        <div key={order.id} className="border border-gray-200 rounded-lg p-6">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center space-x-4">
                              <h3 className="font-semibold">Order #{order.id}</h3>
                              <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(order.status)}`}>
                                {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                              </span>
                            </div>
                            <div className="text-right">
                              <p className="font-semibold">₹{order.total.toLocaleString()}</p>
                              <p className="text-sm text-gray-600 flex items-center">
                                <Calendar size={14} className="mr-1" />
                                {new Date(order.createdAt).toLocaleDateString()}
                              </p>
                            </div>
                          </div>

                          <div className="space-y-3">
                            {order.items.map((item) => (
                              <div key={item.id} className="flex items-center space-x-4">
                                <img
                                  src={item.product?.images[0]}
                                  alt={item.product?.name}
                                  className="w-16 h-16 object-cover rounded-lg"
                                />
                                <div className="flex-1">
                                  <h4 className="font-medium">{item.product?.name}</h4>
                                  <p className="text-sm text-gray-600">
                                    Size: {item.size} • Color: {item.color} • Qty: {item.quantity}
                                  </p>
                                </div>
                                <p className="font-semibold">₹{(item.price * item.quantity).toLocaleString()}</p>
                              </div>
                            ))}
                          </div>

                          <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
                            <button className="text-blue-600 hover:text-blue-800 font-medium">
                              Track Order
                            </button>
                            <button className="text-gray-600 hover:text-gray-800 font-medium">
                              View Details
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Saved Items Tab */}
            {activeTab === 'saved' && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Saved Items</h2>
                
                {savedItems.length === 0 ? (
                  <div className="text-center py-12">
                    <Heart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No saved items</h3>
                    <p className="text-gray-600 mb-4">Save items you love to view them later</p>
                    <button
                      onClick={() => navigate('/products')}
                      className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                    >
                      Explore Products
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {savedItems.map((item) => (
                      <div key={item.id} className="border border-gray-200 rounded-lg p-4">
                        <img
                          src={item.images[0]}
                          alt={item.name}
                          className="w-full aspect-square object-cover rounded-lg mb-4"
                        />
                        <h3 className="font-medium mb-2">{item.name}</h3>
                        <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                        <p className="font-bold text-lg mb-4">₹{item.price.toLocaleString()}</p>
                        <div className="flex space-x-2">
                          <button 
                            onClick={() => navigate(`/product/${item.id}`)}
                            className="flex-1 bg-black text-white py-2 px-4 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                          >
                            View
                          </button>
                          <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                            <Heart size={20} className="text-red-500" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Profile Settings</h2>
                
                <div className="space-y-6">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Personal Information</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          First Name
                        </label>
                        <input
                          type="text"
                          value={user?.firstName || ''}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                          readOnly
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Last Name
                        </label>
                        <input
                          type="text"
                          value={user?.lastName || ''}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                          readOnly
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={user?.email || ''}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                          readOnly
                        />
                      </div>
                    </div>
                  </div>

                  {/* Account Actions */}
                  <div className="pt-6 border-t border-gray-200">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Account Actions</h3>
                    <div className="space-y-3">
                      <button className="w-full sm:w-auto bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                        Edit Profile
                      </button>
                      <button className="w-full sm:w-auto ml-0 sm:ml-3 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                        Change Password
                      </button>
                    </div>
                  </div>

                  {/* Preferences */}
                  <div className="pt-6 border-t border-gray-200">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Preferences</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Email Notifications</h4>
                          <p className="text-sm text-gray-600">Receive updates about your orders and promotions</p>
                        </div>
                        <input type="checkbox" defaultChecked className="rounded border-gray-300 text-black focus:ring-black" />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">SMS Notifications</h4>
                          <p className="text-sm text-gray-600">Get order updates via text messages</p>
                        </div>
                        <input type="checkbox" className="rounded border-gray-300 text-black focus:ring-black" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;