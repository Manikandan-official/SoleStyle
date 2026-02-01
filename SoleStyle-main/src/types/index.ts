export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  createdAt: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: string;
  gender: 'men' | 'women' | 'kids' | 'unisex';
  sport: string;
  colors: string[];
  sizes: string[];
  isNew?: boolean;
  isTrending?: boolean;
  createdAt: string;
}

export interface CartItem {
  id: string;
  productId: string;
  userId: string;
  quantity: number;
  size: string;
  color: string;
  product?: Product;
}

export interface Order {
  id: string;
  userId: string;
  items: OrderItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  createdAt: string;
}

export interface OrderItem {
  id: string;
  orderId: string;
  productId: string;
  quantity: number;
  size: string;
  color: string;
  price: number;
  product?: Product;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export interface Filters {
  gender: string[];
  sport: string[];
  priceRange: [number, number];
  colors: string[];
  sizes: string[];
  sortBy: 'name' | 'price-low' | 'price-high' | 'newest';
}