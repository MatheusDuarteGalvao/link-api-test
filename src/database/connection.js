const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const MONGO_DB = process.env.MONGO_URL;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

const connect = async () => {
  try {
    await mongoose.connect(MONGO_DB, options);
  } catch ({ message }) {
    console.log({ err: message });
  }
};

connect();

const disconnect  = async () => mongoose.connection.close();

module.exports = { connect, disconnect }
