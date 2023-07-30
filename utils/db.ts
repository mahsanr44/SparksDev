import mongoose, { Mongoose } from "mongoose";

const DB_URL = process.env.DB_URL;

if (!DB_URL) {
	throw new Error(
		"Please define the DB_URL environment variable inside .env.local"
	);
  }
declare global {
  namespace NodeJS {
    interface Global {
      mongoose?: {
        conn: Mongoose | null;
        promise: Promise<Mongoose> | null;
      };
    }
  }
}

let cached: { conn: Mongoose | null; promise: Promise<Mongoose> | null } =
  (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

const dbConnect = async () => {
	if (cached.conn) {
		return cached.conn;
	}

 
	if (!cached.promise) {
		const options:any = {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		};

		cached.promise = mongoose.connect(DB_URL, options).then((mongoose) => {
			return mongoose;
		});
	}
	cached.conn = await cached.promise;
	return cached.conn;
};

export default dbConnect;
