import mongoose from 'mongoose';

const MONGODB_DEFAULT_URI = 'mongodb://localhost:27017/CarDealership';

const connectToDatabase = (
  mongoDatabaseURI = process.env.MONGODB_URI || MONGODB_DEFAULT_URI,
) => mongoose.connect(mongoDatabaseURI);

export default connectToDatabase;
