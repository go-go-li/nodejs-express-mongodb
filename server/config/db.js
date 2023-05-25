const mongoose = require('mongoose');
const connectDB = async () => {
  try {
    console.log(process.env.MONGODB_URI);

    mongoose.set('strictQuery', false);
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Database connected: ${conn.connection.host}`);
  } catch (error) {
    console.log('123');
    console.log(error);
  }
};
module.exports = connectDB;
