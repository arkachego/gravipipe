import mongoose from "mongoose";
import connectDB from "./utilities/connect";
import { Store } from "./models/store";
import generateData from "./utilities/data";

(async () => {
  try {
    await connectDB();
    
    const data = generateData();
    await Store.insertMany(data);

    console.log(`Inserted ${data.length} records!`);

    mongoose.connection.close();
  } catch (error) {
    console.error('Error:', error);
    mongoose.connection.close();
  }
})();
