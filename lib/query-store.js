import getMongoClient from './mongodb';

const databaseName = process.env.MONGODB_DB || 'bedbench';
const collectionName = 'queries';

async function getCollection() {
  const client = await getMongoClient();
  return client.db(databaseName).collection(collectionName);
}

export async function readQueries({ page = 1, pageSize = 12, status = 'all' } = {}) {
  const collection = await getCollection();
  const currentPage = Math.max(1, Number(page) || 1);
  const limit = Math.min(50, Math.max(1, Number(pageSize) || 12));
  const filter = status === 'read' ? { status: 'read' } : status === 'unread' ? { $or: [{ status: 'unread' }, { status: { $exists: false } }] } : {};
  const [queries, total, unread, read] = await Promise.all([
    collection.find(filter).sort({ createdAt: -1 }).skip((currentPage - 1) * limit).limit(limit).toArray(),
    collection.countDocuments(filter),
    collection.countDocuments({ $or: [{ status: 'unread' }, { status: { $exists: false } }] }),
    collection.countDocuments({ status: 'read' }),
  ]);
  return {
    queries: queries.map(({ _id, ...query }) => ({ ...query, status: query.status || 'unread', id: _id.toString() })),
    total,
    unread,
    read,
    page: currentPage,
    pageSize: limit,
    totalPages: Math.max(1, Math.ceil(total / limit)),
  };
}

export async function appendQuery(query) {
  const collection = await getCollection();
  const saved = { ...query, status: 'unread', createdAt: new Date() };
  const result = await collection.insertOne(saved);
  return { ...saved, id: result.insertedId.toString() };
}

export async function updateQueryStatus(id, status) {
  const collection = await getCollection();
  const { ObjectId } = await import('mongodb');
  if (!ObjectId.isValid(id)) return false;
  const result = await collection.updateOne({ _id: new ObjectId(id) }, { $set: { status } });
  return result.matchedCount > 0;
}

export async function deleteQuery(id) {
  const collection = await getCollection();
  const { ObjectId } = await import('mongodb');
  if (!ObjectId.isValid(id)) return false;
  const result = await collection.deleteOne({ _id: new ObjectId(id) });
  return result.deletedCount > 0;
}
