import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const MONGO_DB = process.env.MONGO_URL;

const options = {
  useFindAndModify: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
}

export const connect = async () => {
  try {
    await mongoose.connect(MONGO_DB, options);
  } catch ({ message }) {
    console.log({ err: message });
  }
};

export const disconnect  = async () => mongoose.connection.close();
