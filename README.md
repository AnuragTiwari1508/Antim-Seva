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
- pnpm (recommended) or npm

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

## 🗄️ MongoDB Atlas Setup

### Step 1: Create MongoDB Atlas Account
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Sign up for a free account
3. Create a new cluster (choose free tier M0)

### Step 2: Database Configuration
```bash
# Test MongoDB connection
node -e "
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = 'your-mongodb-connection-string';
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    await client.db('admin').command({ ping: 1 });
    console.log('✅ Successfully connected to MongoDB!');
  } catch (error) {
    console.log('❌ Connection failed:', error.message);
  } finally {
    await client.close();
  }
}
run();
"
```

### Step 3: IP Whitelisting
```bash
# Get your current IP address
curl -s ifconfig.me

# Add this IP to MongoDB Atlas Network Access:
# 1. Go to MongoDB Atlas Dashboard
# 2. Navigate to Network Access
# 3. Click "Add IP Address"
# 4. Add your IP or use 0.0.0.0/0 for development (not recommended for production)
```

### Step 4: Database Structure
The application creates these collections automatically:
- `user.users` - User accounts and profiles
- `user.carts` - Shopping cart data

## 🔧 Development Commands

### Start Development Server
```bash
# Standard development
pnpm dev

# With specific port
PORT=3000 pnpm dev

# With environment variables
JWT_SECRET=your-secret MONGODB_URI=your-uri pnpm dev

# With debug mode
DEBUG=* pnpm dev
```

### Database Testing Commands
```bash
# Test database connection
node -e "
const { connectToDatabase } = require('./lib/mongodb-native.js');
async function test() {
  try {
    const { db } = await connectToDatabase();
    console.log('✅ Database connected successfully');
    const users = await db.collection('users').countDocuments();
    console.log('Users in database:', users);
  } catch (error) {
    console.error('❌ Database error:', error.message);
  }
}
test();
"

# Check database collections
node -e "
const { connectToDatabase } = require('./lib/mongodb-native.js');
async function listCollections() {
  const { db } = await connectToDatabase();
  const collections = await db.listCollections().toArray();
  console.log('Collections:', collections.map(c => c.name));
}
listCollections();
"
```

### API Testing Commands
```bash
# Test registration API
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "password": "password123",
    "phone": "9876543210"
  }'

# Test login API
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "password123"
  }'

# Test cart API (requires authentication token)
curl -X POST http://localhost:3000/api/cart \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{
    "productId": "test-product-123",
    "productName": "Test Product",
    "quantity": 2,
    "price": 199.99
  }'
```

### Build and Production Commands
```bash
# Build for production
pnpm build

# Start production server
pnpm start

# Check build output
pnpm build && ls -la .next/

# Lint code
pnpm lint

# Type checking
npx tsc --noEmit
```

## 🔧 Process Management Commands

### Kill Existing Processes
```bash
# Kill Next.js development servers
pkill -f "next dev"

# Kill specific port processes
lsof -ti:3000 | xargs kill -9

# Kill all Node processes (use with caution)
pkill -f node
```

### Check Running Processes
```bash
# Check what's running on port 3000
lsof -i :3000

# Check all Node processes
ps aux | grep node

# Check Next.js processes specifically
ps aux | grep "next dev"
```

## 📁 Project Structure

```
├── app/                    # Next.js 13+ app directory
│   ├── api/               # API routes
│   │   ├── auth/         # Authentication endpoints
│   │   │   ├── register/ # User registration
│   │   │   ├── login/    # User login
│   │   │   ├── logout/   # User logout
│   │   │   └── me/       # Current user info
│   │   ├── cart/         # Cart management endpoints
│   │   └── debug/        # Debug endpoints
│   ├── fonts.ts          # Font configuration
│   ├── layout.tsx        # Root layout component
│   ├── providers.tsx     # Client-side providers
│   ├── login/page.js     # Login page
│   ├── register/page.js  # Registration page
│   └── globals.css       # Global styles
├── components/            # Reusable UI components
├── context/              # React context providers
│   └── AuthContext.js   # Authentication context
├── lib/                  # Utility libraries
│   ├── mongodb-native.js # MongoDB connection (native driver)
│   ├── mongoose.js       # Mongoose configuration
│   └── utils.ts          # Utility functions
├── models/               # Database models
│   ├── User.js          # User model
│   └── Cart.js          # Cart model
├── middleware.js         # Next.js middleware for auth
├── .env.example         # Environment template
└── README.md           # This file
```

## 🔒 Authentication Flow

The application uses JWT-based authentication with the following flow:

1. **Registration**: `POST /api/auth/register`
   - User provides name, email, password, phone, address
   - Password is hashed with bcryptjs
   - User stored in MongoDB `user.users` collection

2. **Login**: `POST /api/auth/login`
   - User provides email and password
   - Server validates credentials
   - JWT token generated and set as HTTP-only cookie
   - User data returned (without password)

3. **Authentication Check**: `GET /api/auth/me`
   - Validates JWT token from cookie or Authorization header
   - Returns current user data

4. **Logout**: `GET /api/auth/logout`
   - Clears authentication cookie

## 🛒 Cart System

Shopping cart functionality with user association:

- **Get Cart**: `GET /api/cart` (requires auth)
- **Add Item**: `POST /api/cart` (requires auth)
- **Update Item**: `PUT /api/cart` (requires auth)
- **Remove Item**: `DELETE /api/cart` (requires auth)

## 🐛 Troubleshooting

### Common Issues and Solutions

#### 1. MongoDB Connection Issues
```bash
# Error: "Failed to connect to MongoDB"
# Solution: Check your MONGODB_URI and IP whitelist

# Test connection manually
node -e "
const { MongoClient } = require('mongodb');
const client = new MongoClient('your-mongodb-uri');
client.connect()
  .then(() => console.log('✅ Connected'))
  .catch(err => console.error('❌ Error:', err.message));
"
```

#### 2. Port Already in Use
```bash
# Error: "Port 3000 is already in use"
# Solution: Kill existing process or use different port

# Find process using port 3000
lsof -i :3000

# Kill process
kill -9 $(lsof -ti:3000)

# Or use different port
PORT=3001 pnpm dev
```

#### 3. Environment Variables Not Loading
```bash
# Check if .env.local exists and has correct format
cat .env.local

# Test environment loading
node -e "
require('dotenv').config({ path: '.env.local' });
console.log('JWT_SECRET exists:', !!process.env.JWT_SECRET);
console.log('MONGODB_URI exists:', !!process.env.MONGODB_URI);
"
```

#### 4. JWT Token Issues
```bash
# Error: "Invalid token" or "JsonWebTokenError"
# Solution: Ensure JWT_SECRET is consistent and tokens are not expired

# Clear browser cookies or use:
curl -X GET http://localhost:3000/api/auth/logout
```

#### 5. Build/Compilation Errors
```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules pnpm-lock.yaml
pnpm install

# Check for TypeScript errors
npx tsc --noEmit
```

#### 6. Registration/Login Pages Not Loading
```bash
# Check middleware configuration
# Ensure middleware.js has correct JWT validation

# Test direct page access
curl -v http://localhost:3000/register
curl -v http://localhost:3000/login
```

### Debug Commands
```bash
# Enable debug logging
DEBUG=* pnpm dev

# Check API endpoints
curl -v http://localhost:3000/api/debug

# Test specific routes
curl -v http://localhost:3000/api/auth/me
```

## 🚀 Deployment

### Vercel Deployment
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables in Vercel dashboard
```

### Environment Variables for Production
```env
JWT_SECRET=your-production-jwt-secret
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/
NEXT_PUBLIC_GOOGLE_CLIENT_ID=your-google-client-id
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### Production Checklist
- [ ] Set strong JWT_SECRET
- [ ] Configure MongoDB Atlas production cluster
- [ ] Set up proper IP whitelisting
- [ ] Configure Google OAuth for production domain
- [ ] Set up SSL/HTTPS
- [ ] Configure CORS if needed

## 🔧 Advanced Configuration

### Custom MongoDB Configuration
```javascript
// lib/mongodb-native.js customization
const client = new MongoClient(uri, {
  tls: true,
  maxPoolSize: 10,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
  // Add custom options here
});
```

### JWT Configuration
```javascript
// Custom JWT settings in API routes
const token = jwt.sign(
  { userId: user._id.toString(), email: user.email },
  JWT_SECRET,
  { 
    expiresIn: '7d',  // Customize expiration
    issuer: 'antim-sewa',
    audience: 'antim-sewa-users'
  }
);
```

## 📊 Performance Optimization

### Database Optimization
```bash
# Create indexes for better performance
node -e "
const { connectToDatabase } = require('./lib/mongodb-native.js');
async function createIndexes() {
  const { db } = await connectToDatabase();
  await db.collection('users').createIndex({ email: 1 }, { unique: true });
  await db.collection('carts').createIndex({ userId: 1 });
  console.log('✅ Indexes created');
}
createIndexes();
"
```

### Monitoring Commands
```bash
# Check bundle size
npx @next/bundle-analyzer

# Analyze build
pnpm build && npx next build --profile

# Memory usage
node --max-old-space-size=4096 node_modules/.bin/next dev
```

## 📝 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm type-check` - Run TypeScript checks

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Anurag Tiwari**
- GitHub: [@AnuragTiwari1508](https://github.com/AnuragTiwari1508)
- Email: tiwarianurag342407@gmail.com

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- MongoDB for cloud database services
- Tailwind CSS for styling utilities
- Radix UI for accessible components
- Vercel for hosting platform

## 📞 Support

If you encounter any issues:
1. Check the troubleshooting section above
2. Search existing issues on GitHub
3. Create a new issue with detailed error information
4. Include your environment details (Node.js version, OS, etc.)

---

**Happy Coding! 🚀**
