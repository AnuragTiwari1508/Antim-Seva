# Antim Sewa - अंतिम सेवा

This is a comprehensive funeral services website that provides essential items and services for final rites. Built with Next.js 15 and MongoDB Atlas cloud database.

## 🌟 Features

- **User Authentication System**
  - User registration and login
  - JWT-based authentication with secure cookies
  - Password hashing with bcryptjs
  - Google OAuth integration support

- **Product & Service Management**
  - Individual products catalog
  - Package deals for complete services
  - Service offerings with detailed descriptions

- **Shopping Cart System**
  - Add/remove items from cart
  - Update quantities
  - User-specific cart management
  - Persistent cart storage in MongoDB

- **Responsive Design**
  - Mobile-first responsive design
  - Hindi and English bilingual support
  - Modern UI with Tailwind CSS

## 🛠️ Tech Stack

- **Frontend:** Next.js 15, React 18, TypeScript
- **Backend:** Next.js API Routes, Node.js
- **Database:** MongoDB Atlas (Cloud)
- **Authentication:** JWT with jose library
- **Styling:** Tailwind CSS, Radix UI components
- **Icons:** Lucide React
- **Forms:** React Hook Form with Zod validation

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- MongoDB Atlas account
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/AnuragTiwari1508/Antim-Sewa.git
cd Antim-Sewa
```

2. **Install dependencies**
```bash
pnpm install
# or
npm install
```

3. **Environment Setup**
```bash
cp .env.example .env.local
```

4. **Configure Environment Variables**
Edit `.env.local` with your values:
```env
# JWT Secret - Generate a secure random string
JWT_SECRET=your-jwt-secret-key-here

# MongoDB URI - MongoDB Atlas Connection String
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/?retryWrites=true&w=majority&appName=YourApp

# Google OAuth - Get from Google Cloud Console
NEXT_PUBLIC_GOOGLE_CLIENT_ID=your-google-client-id.apps.googleusercontent.com

# Site URL
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

5. **Run the development server**
```bash
pnpm dev
# or
npm run dev
```

6. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
├── app/                    # Next.js 13+ app directory
│   ├── api/               # API routes
│   │   ├── auth/         # Authentication endpoints
│   │   └── cart/         # Cart management endpoints
│   ├── (pages)/          # Page components
│   └── globals.css       # Global styles
├── components/            # Reusable UI components
├── context/              # React context providers
├── lib/                  # Utility libraries
│   ├── mongodb-native.js # MongoDB connection (native driver)
│   └── utils.ts          # Utility functions
├── models/               # Database models
└── middleware.js         # Next.js middleware for auth
```

## 🔒 Authentication

The application uses JWT-based authentication with the following flow:

1. User registers/logs in through API endpoints
2. Server generates JWT token and sets secure HTTP-only cookie
3. Middleware validates JWT on protected routes
4. Client-side AuthContext manages user state

## 🗄️ Database

The application uses MongoDB Atlas with native MongoDB driver for:

- **Users Collection:** User accounts and profiles
- **Carts Collection:** Shopping cart data linked to users

## 🔧 Development

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

### API Endpoints

#### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user
- `GET /api/auth/logout` - User logout

#### Cart Management
- `GET /api/cart` - Get user's cart
- `POST /api/cart` - Add item to cart
- `PUT /api/cart` - Update cart item
- `DELETE /api/cart` - Remove item/clear cart

## 🚀 Deployment

The application is ready for deployment on platforms like Vercel, Netlify, or any Node.js hosting service.

### Environment Variables for Production

Ensure all environment variables are properly set in your deployment platform:

- `JWT_SECRET` - Strong secret key for JWT signing
- `MONGODB_URI` - MongoDB Atlas connection string
- `NEXT_PUBLIC_GOOGLE_CLIENT_ID` - Google OAuth client ID
- `NEXT_PUBLIC_SITE_URL` - Your production domain

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Anurag Tiwari**
- GitHub: [@AnuragTiwari1508](https://github.com/AnuragTiwari1508)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- MongoDB for cloud database services
- Tailwind CSS for styling utilities
- Radix UI for accessible components
