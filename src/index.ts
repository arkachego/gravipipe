import mongoose from "mongoose";
import fs from "fs";
import connectDB from "./utilities/connect";
import { Store } from "./models/store";
import pipeline from "./pipeline";

(async () => {
  let stores = [];
  try {
    await connectDB();
    
    stores = await Store.aggregate(pipeline);
    await fs.writeFileSync('outputs.json', JSON.stringify(stores));

    mongoose.connection.close();
  } catch (error) {
    console.error('Error:', error);
    mongoose.connection.close();
  } finally {
    return stores;
  }
})();
