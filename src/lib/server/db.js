import "server-only";
import { MongoClient } from "mongodb";

// One shared client per server process. In dev, Next reloads modules on every
// change, so the promise is kept on globalThis to avoid opening a new
// connection pool each time.
const globalForMongo = globalThis;

function getClientPromise() {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error("MONGODB_URI is not set in .env.local");
  if (!globalForMongo._tbsMongo) {
    globalForMongo._tbsMongo = new MongoClient(uri).connect().catch((err) => {
      // let the next request retry instead of caching a failed connection forever
      globalForMongo._tbsMongo = undefined;
      throw err;
    });
  }
  return globalForMongo._tbsMongo;
}

export async function getDb() {
  const client = await getClientPromise();
  return client.db(process.env.MONGODB_DB || "tbs");
}

// content:     { _id: "<section key>", value: <section JSON>, updatedAt }
// submissions: { _id: "<id>", type: "<submission type>", createdAt, ...form fields }
export async function contentCollection() {
  return (await getDb()).collection("content");
}

export async function submissionsCollection() {
  return (await getDb()).collection("submissions");
}
