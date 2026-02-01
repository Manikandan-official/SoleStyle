# SoleStyle - Premium Footwear E-Commerce Platform

A modern, full-stack e-commerce application for premium footwear. Built with React, TypeScript, Vite, and Supabase, SoleStyle delivers a seamless shopping experience with advanced filtering, user authentication, and cart management.

## 🎯 Overview

SoleStyle is a sophisticated footwear marketplace that combines elegant UI design with robust backend infrastructure. The platform offers customers an intuitive browsing experience while providing merchants with comprehensive product management and analytics capabilities.

## ✨ Key Features

- **User Authentication**: Secure registration and login with JWT tokens
- **Product Browsing**: Browse and filter shoes by category, size, price, and more
- **Advanced Search & Filtering**: Dynamic sidebar filters for refined product discovery
- **Shopping Cart**: Persistent cart management with real-time updates
- **User Profiles**: Personalized customer dashboard
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Product Details**: Detailed product pages with high-quality images and specifications
- **Category Pages**: Dedicated pages for Men's, Women's, and other shoe collections

## 🛠️ Technology Stack

### Frontend
- **React 18.3** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite 5.4** - Lightning-fast build tool
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **React Router 7.7** - Client-side routing
- **Lucide React** - Beautiful icon library

### Backend & Database
- **Supabase** - PostgreSQL database & authentication
- **Express.js** - REST API framework
- **PostgreSQL** - Relational database
- **JWT** - Secure token-based authentication
- **bcryptjs** - Password hashing

### Development Tools
- **ESLint 9.9** - Code linting
- **TypeScript ESLint** - TypeScript-specific linting
- **PostCSS** - CSS processing

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager
- Supabase account for database and authentication
- Git

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/SoleStyle.git
cd SoleStyle-main
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

Create a `.env.local` file in the root directory with the following variables:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Refer to [.env.example](.env.example) for the complete list of environment variables.

### 4. Development Server

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### 5. Build for Production

Create an optimized production build:

```bash
npm run build
```

### 6. Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
SoleStyle-main/
├── src/
│   ├── api/              # API integration layer
│   │   └── customers.ts
│   ├── components/       # Reusable React components
│   │   ├── FilterSidebar.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   └── ProductCard.tsx
│   ├── context/          # React Context for state management
│   │   ├── AuthContext.tsx
│   │   └── CartContext.tsx
│   ├── lib/              # Utility functions and configurations
│   │   ├── db.ts
│   │   └── supabase.ts
│   ├── pages/            # Page components
│   │   ├── CartPage.tsx
│   │   ├── DashboardPage.tsx
│   │   ├── HomePage.tsx
│   │   ├── LoginPage.tsx
│   │   ├── ProductDetailPage.tsx
│   │   ├── ProductListingPage.tsx
│   │   ├── RegisterPage.tsx
│   │   └── WomenPage.tsx
│   ├── types/            # TypeScript type definitions
│   │   └── index.ts
│   ├── App.tsx           # Root component
│   ├── main.tsx          # Application entry point
│   └── index.css         # Global styles
├── public/               # Static assets
├── .env.example          # Environment variables template
├── package.json          # Project dependencies
├── tsconfig.json         # TypeScript configuration
├── vite.config.ts        # Vite configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── postcss.config.js     # PostCSS configuration
└── eslint.config.js      # ESLint configuration
```

## 📚 API Endpoints

The backend provides the following RESTful API endpoints:

### Authentication
- `POST /auth/register` - Register a new user
- `POST /auth/login` - Login user
- `POST /auth/logout` - Logout user

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product details
- `GET /api/products/category/:category` - Get products by category

### Cart
- `GET /api/cart` - Get user cart
- `POST /api/cart/items` - Add item to cart
- `PUT /api/cart/items/:id` - Update cart item
- `DELETE /api/cart/items/:id` - Remove item from cart

### User
- `GET /api/user/profile` - Get user profile
- `PUT /api/user/profile` - Update user profile

## 🔐 Security Features

- **Password Hashing**: All passwords are securely hashed using bcryptjs
- **JWT Authentication**: Secure token-based authentication for API endpoints
- **Environment Variables**: Sensitive credentials stored in environment variables
- **CORS Protection**: Cross-origin resource sharing configured securely
- **Input Validation**: Server-side validation for all API requests

## 🎨 Styling

This project uses **Tailwind CSS** for rapid UI development. Key styling files:

- `tailwind.config.js` - Tailwind configuration and custom theme
- `postcss.config.js` - PostCSS processing pipeline
- `src/index.css` - Global styles and Tailwind directives

## 🧪 Code Quality

### Linting

Run ESLint to check code quality:

```bash
npm run lint
```

Fix linting issues automatically:

```bash
npm run lint -- --fix
```

## 📦 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes**: Commit your work with clear, descriptive messages
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**: Describe your changes in detail

### Contribution Guidelines

- Follow the existing code style and conventions
- Ensure all tests pass and linting checks pass
- Write meaningful commit messages
- Update documentation as needed
- Add comments for complex logic

## 📝 Commit Message Convention

Use clear and descriptive commit messages:

```
[FEATURE] Add product filtering functionality
[FIX] Resolve cart calculation bug
[REFACTOR] Improve component structure
[DOCS] Update installation instructions
```

## 🐛 Bug Reports & Feature Requests

Found a bug or have a feature idea? 

- **Issues**: [Open an Issue](https://github.com/yourusername/SoleStyle/issues)
- **Discussions**: [Start a Discussion](https://github.com/yourusername/SoleStyle/discussions)

Please provide:
- Clear description of the issue
- Steps to reproduce (for bugs)
- Expected vs actual behavior
- Screenshots/recordings (if applicable)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Support & Contact

- **Email**: support@solestyle.com
- **Twitter**: [@SoleStyle](https://twitter.com)
- **Documentation**: [Wiki](https://github.com/yourusername/SoleStyle/wiki)

## 🙏 Acknowledgments

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Supabase](https://supabase.io)
- [TypeScript](https://www.typescriptlang.org)

## 🚀 Roadmap

- [ ] Payment gateway integration (Stripe/PayPal)
- [ ] Order tracking and history
- [ ] Product reviews and ratings
- [ ] Wishlist functionality
- [ ] Admin dashboard
- [ ] Email notifications
- [ ] Mobile app (React Native)
- [ ] Analytics and reporting

---

**Made with ❤️ by the SoleStyle Team**

Last Updated: February 2026


