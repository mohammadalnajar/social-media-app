import mongoose from 'mongoose';

export const connectDB = async (req, res) => {
  try {
    const con = await mongoose.connect(process.env.MONGODB_URL);
    if (con) {
      console.log('DB is connected ...'.green.bold);
    }
  } catch (error) {
    console.log(error, 'error db connection ...'.red.bold);
  }
};
