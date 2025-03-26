import mongoose from 'mongoose';

// By default, use the url for local mongodb running on docker.
const MONGO_URI = process.env.MONGO_URI || 'mongodb://admin:password@localhost:27017/gravitale?authSource=admin';

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
  } catch (error) {
    process.exit(1);
  }
};

export default connectDB;
