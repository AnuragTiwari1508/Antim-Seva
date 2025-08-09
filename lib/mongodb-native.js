import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;

// Create a MongoClient with optimized connection settings
const client = new MongoClient(uri, {
  tls: true,
  maxPoolSize: 10,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
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
