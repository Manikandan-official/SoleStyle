import React, { useState, useEffect } from 'react';
import { Filter, Grid, List } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import FilterSidebar from '../components/FilterSidebar';
import { Product, Filters } from '../types';

const ProductListingPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isLoading, setIsLoading] = useState(true);

  const [filters, setFilters] = useState<Filters>({
    gender: searchParams.get('gender') ? [searchParams.get('gender')!] : [],
    sport: [],
    priceRange: [0, 20000],
    colors: [],
    sizes: [],
    sortBy: 'name'
  });

  // Sample products (in real app, fetch from API)
  const sampleProducts: Product[] = [
    {
      id: '1',
      name: 'Air Max 270 React',
      description: 'Premium running shoes with React foam technology for ultimate comfort and performance.',
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
      description: 'Energy-returning running shoes with responsive Boost midsole.',
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
      description: 'Classic basketball shoes with premium leather upper and iconic style.',
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
      description: 'Timeless lifestyle sneakers with canvas upper and rubber sole.',
      price: 4999,
      images: ['https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg'],
      category: 'lifestyle',
      gender: 'unisex',
      sport: 'lifestyle',
      colors: ['black', 'white', 'red'],
      sizes: ['6', '7', '8', '9', '10', '11'],
      createdAt: new Date().toISOString(),
    },
    {
      id: '5',
      name: 'React Element 55',
      description: 'Modern lifestyle shoes with React foam cushioning.',
      price: 8999,
      originalPrice: 10999,
      images: ['https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg'],
      category: 'lifestyle',
      gender: 'women',
      sport: 'lifestyle',
      colors: ['pink', 'white', 'gray'],
      sizes: ['6', '7', '8', '9', '10'],
      createdAt: new Date().toISOString(),
    },
    {
      id: '6',
      name: 'Free Run 5.0',
      description: 'Flexible running shoes for natural movement.',
      price: 9999,
      images: ['https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg'],
      category: 'running',
      gender: 'women',
      sport: 'running',
      colors: ['purple', 'white'],
      sizes: ['6', '7', '8', '9', '10'],
      isNew: true,
      createdAt: new Date().toISOString(),
    },
    {
      id: '7',
      name: 'Zoom Freak 3',
      description: 'High-performance basketball shoes with Zoom Air cushioning.',
      price: 14999,
      images: ['https://images.pexels.com/photos/1280064/pexels-photo-1280064.jpeg'],
      category: 'basketball',
      gender: 'men',
      sport: 'basketball',
      colors: ['green', 'black'],
      sizes: ['8', '9', '10', '11', '12', '13'],
      createdAt: new Date().toISOString(),
    },
    {
      id: '8',
      name: 'Court Vision Low',
      description: 'Classic court-inspired shoes with vintage basketball style.',
      price: 6999,
      images: ['https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg'],
      category: 'lifestyle',
      gender: 'kids',
      sport: 'lifestyle',
      colors: ['white', 'blue'],
      sizes: ['3', '4', '5', '6'],
      createdAt: new Date().toISOString(),
    },
  ];

  useEffect(() => {
    // Simulate API call
    setIsLoading(true);
    setTimeout(() => {
      setProducts(sampleProducts);
      setIsLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    let filtered = [...products];

    // Apply filters
    if (filters.gender.length > 0) {
      filtered = filtered.filter(product => filters.gender.includes(product.gender));
    }

    if (filters.sport.length > 0) {
      filtered = filtered.filter(product => filters.sport.includes(product.sport));
    }

    if (filters.colors.length > 0) {
      filtered = filtered.filter(product => 
        product.colors.some(color => filters.colors.includes(color))
      );
    }

    if (filters.sizes.length > 0) {
      filtered = filtered.filter(product => 
        product.sizes.some(size => filters.sizes.includes(size))
      );
    }

    // Price range filter
    filtered = filtered.filter(product => 
      product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]
    );

    // Search filter
    const searchQuery = searchParams.get('search');
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort
    switch (filters.sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        break;
      case 'name':
      default:
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }

    setFilteredProducts(filtered);
  }, [products, filters, searchParams]);

  const searchQuery = searchParams.get('search');

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
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {searchQuery ? `Search Results for "${searchQuery}"` : 'All Shoes'}
          </h1>
          <p className="text-gray-600">
            {filteredProducts.length} products found
          </p>
        </div>

        <div className="flex gap-8">
          {/* Filter Sidebar */}
          <FilterSidebar
            filters={filters}
            onFiltersChange={setFilters}
            isOpen={isFilterOpen}
            onClose={() => setIsFilterOpen(false)}
          />

          {/* Main Content */}
          <div className="flex-1">
            {/* Mobile Filter Button & View Toggle */}
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => setIsFilterOpen(true)}
                className="lg:hidden flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                <Filter size={20} />
                Filters
              </button>

              <div className="flex items-center gap-2 ml-auto">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-black text-white' : 'bg-gray-200'}`}
                >
                  <Grid size={20} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-black text-white' : 'bg-gray-200'}`}
                >
                  <List size={20} />
                </button>
              </div>
            </div>

            {/* Products Grid/List */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <h3 className="text-xl font-medium text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600">Try adjusting your filters or search terms</p>
              </div>
            ) : (
              <div className={`
                ${viewMode === 'grid' 
                  ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6' 
                  : 'space-y-4'
                }
              `}>
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListingPage;