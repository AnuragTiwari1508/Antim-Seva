import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

// Create a MongoClient with optimized connection settings
const client = new MongoClient(uri, {
  maxPoolSize: 10,
  serverSelectionTimeoutMS: 30000,
  connectTimeoutMS: 30000,
  socketTimeoutMS: 45000,
  family: 4, // Use IPv4
  retryWrites: true,
  w: 'majority',
});

let cachedClient = null;
let cachedDb = null;

async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  try {
    // Connect the client to the server
    await client.connect();
    
    // Send a ping to confirm a successful connection
    const adminDb = client.db("admin");
    const pingResult = await adminDb.command({ ping: 1 });
    console.log("✅ Successfully connected to MongoDB Atlas! Ping result:", pingResult);
    
    // Use 'user' database (where you want the data to be stored)
    const db = client.db('user');
    
    cachedClient = client;
    cachedDb = db;
    
    return { client: cachedClient, db: cachedDb };
  } catch (error) {
    console.error('❌ MongoDB native connection error:', error.message);
    throw error;
  }
}

export { connectToDatabase };
export default client;
