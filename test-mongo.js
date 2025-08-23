const { MongoClient, ServerApiVersion } = require('mongodb');
const fs = require('fs');

const uri = process.env.MONGODB_URI || "mongodb+srv://antimseva_admin:lLUenDbvzu3TBP5N@antimsevacluster.ndg6lqr.mongodb.net/?retryWrites=true&w=majority&appName=AntimSevaCluster;" // Replace with your string

// Try with minimal configuration first
const client = new MongoClient(uri, {
  serverSelectionTimeoutMS: 5000,
  connectTimeoutMS: 10000,
  // Try without any SSL/TLS specific settings
});

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("✅ Successfully connected to MongoDB!");
  } catch (error) {
    console.error("❌ Connection failed:", error.message);
  } finally {
    await client.close();
  }
}
run();
