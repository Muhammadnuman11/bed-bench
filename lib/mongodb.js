import { MongoClient } from 'mongodb';

const globalForMongo = globalThis;
const cached = globalForMongo.__bedBenchMongo || { client: null, promise: null };

globalForMongo.__bedBenchMongo = cached;

export default function getMongoClient() {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error('Missing MONGODB_URI environment variable');

  if (cached.client) return Promise.resolve(cached.client);
  if (!cached.promise) {
    cached.promise = new MongoClient(uri, { maxPoolSize: 10 }).connect().then((client) => {
      cached.client = client;
      return client;
    });
  }
  return cached.promise;
}
