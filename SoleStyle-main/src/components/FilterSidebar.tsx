import React from 'react';
import { X, ChevronDown, ChevronUp } from 'lucide-react';
import { Filters } from '../types';

interface FilterSidebarProps {
  filters: Filters;
  onFiltersChange: (filters: Filters) => void;
  isOpen: boolean;
  onClose: () => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  filters,
  onFiltersChange,
  isOpen,
  onClose
}) => {
  const [expandedSections, setExpandedSections] = React.useState({
    gender: true,
    sport: true,
    price: true,
    colors: true,
    sizes: true,
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const genderOptions = ['men', 'women', 'kids', 'unisex'];
  const sportOptions = ['running', 'basketball', 'football', 'tennis', 'lifestyle', 'training'];
  const colorOptions = ['black', 'white', 'red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'brown', 'gray'];
  const sizeOptions = ['6', '7', '8', '9', '10', '11', '12', '13'];

  const handleFilterChange = (type: keyof Filters, value: any) => {
    onFiltersChange({
      ...filters,
      [type]: value
    });
  };

  const handleMultiSelectChange = (type: keyof Filters, option: string) => {
    const currentValues = filters[type] as string[];
    const newValues = currentValues.includes(option)
      ? currentValues.filter(v => v !== option)
      : [...currentValues, option];
    
    handleFilterChange(type, newValues);
  };

  const clearAllFilters = () => {
    onFiltersChange({
      gender: [],
      sport: [],
      priceRange: [0, 20000],
      colors: [],
      sizes: [],
      sortBy: 'name'
    });
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:relative top-0 left-0 h-full lg:h-auto w-80 bg-white z-50 
        transform transition-transform duration-300 ease-in-out overflow-y-auto
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        lg:w-64 lg:sticky lg:top-24
      `}>
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">Filters</h2>
            <div className="flex items-center gap-2">
              <button
                onClick={clearAllFilters}
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Clear All
              </button>
              <button 
                onClick={onClose}
                className="lg:hidden p-1 hover:bg-gray-100 rounded"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Sort By */}
          <div className="mb-6">
            <h3 className="font-medium mb-3">Sort By</h3>
            <select
              value={filters.sortBy}
              onChange={(e) => handleFilterChange('sortBy', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
            >
              <option value="name">Name</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="newest">Newest</option>
            </select>
          </div>

          {/* Gender */}
          <div className="mb-6">
            <button
              onClick={() => toggleSection('gender')}
              className="flex items-center justify-between w-full mb-3"
            >
              <h3 className="font-medium">Gender</h3>
              {expandedSections.gender ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            {expandedSections.gender && (
              <div className="space-y-2">
                {genderOptions.map(option => (
                  <label key={option} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filters.gender.includes(option)}
                      onChange={() => handleMultiSelectChange('gender', option)}
                      className="rounded border-gray-300 text-black focus:ring-black mr-2"
                    />
                    <span className="text-sm capitalize">{option}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Sport */}
          <div className="mb-6">
            <button
              onClick={() => toggleSection('sport')}
              className="flex items-center justify-between w-full mb-3"
            >
              <h3 className="font-medium">Sport</h3>
              {expandedSections.sport ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            {expandedSections.sport && (
              <div className="space-y-2">
                {sportOptions.map(option => (
                  <label key={option} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filters.sport.includes(option)}
                      onChange={() => handleMultiSelectChange('sport', option)}
                      className="rounded border-gray-300 text-black focus:ring-black mr-2"
                    />
                    <span className="text-sm capitalize">{option}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Price Range */}
          <div className="mb-6">
            <button
              onClick={() => toggleSection('price')}
              className="flex items-center justify-between w-full mb-3"
            >
              <h3 className="font-medium">Price Range</h3>
              {expandedSections.price ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            {expandedSections.price && (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    placeholder="Min"
                    value={filters.priceRange[0]}
                    onChange={(e) => handleFilterChange('priceRange', [Number(e.target.value), filters.priceRange[1]])}
                    className="w-full p-2 border border-gray-300 rounded text-sm"
                  />
                  <span>-</span>
                  <input
                    type="number"
                    placeholder="Max"
                    value={filters.priceRange[1]}
                    onChange={(e) => handleFilterChange('priceRange', [filters.priceRange[0], Number(e.target.value)])}
                    className="w-full p-2 border border-gray-300 rounded text-sm"
                  />
                </div>
                <input
                  type="range"
                  min="0"
                  max="20000"
                  step="500"
                  value={filters.priceRange[1]}
                  onChange={(e) => handleFilterChange('priceRange', [filters.priceRange[0], Number(e.target.value)])}
                  className="w-full"
                />
                <div className="text-sm text-gray-600">
                  ₹{filters.priceRange[0].toLocaleString()} - ₹{filters.priceRange[1].toLocaleString()}
                </div>
              </div>
            )}
          </div>

          {/* Colors */}
          <div className="mb-6">
            <button
              onClick={() => toggleSection('colors')}
              className="flex items-center justify-between w-full mb-3"
            >
              <h3 className="font-medium">Colors</h3>
              {expandedSections.colors ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            {expandedSections.colors && (
              <div className="grid grid-cols-4 gap-2">
                {colorOptions.map(color => (
                  <button
                    key={color}
                    onClick={() => handleMultiSelectChange('colors', color)}
                    className={`
                      w-8 h-8 rounded-full border-2 transition-all
                      ${filters.colors.includes(color) 
                        ? 'border-black scale-110' 
                        : 'border-gray-300 hover:border-gray-400'
                      }
                    `}
                    style={{ backgroundColor: color.toLowerCase() }}
                    title={color}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Sizes */}
          <div className="mb-6">
            <button
              onClick={() => toggleSection('sizes')}
              className="flex items-center justify-between w-full mb-3"
            >
              <h3 className="font-medium">Sizes</h3>
              {expandedSections.sizes ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            {expandedSections.sizes && (
              <div className="grid grid-cols-4 gap-2">
                {sizeOptions.map(size => (
                  <button
                    key={size}
                    onClick={() => handleMultiSelectChange('sizes', size)}
                    className={`
                      p-2 text-sm border rounded transition-colors
                      ${filters.sizes.includes(size)
                        ? 'border-black bg-black text-white'
                        : 'border-gray-300 hover:border-gray-400'
                      }
                    `}
                  >
                    {size}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;