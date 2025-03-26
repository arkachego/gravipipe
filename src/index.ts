import mongoose from "mongoose";
import fs from "fs";
import connectDB from "./utilities/connect";
import { Store } from "./models/store";
import pipeline from "./pipeline";

const OUTPUT_FILE_NAME = 'outputs.json';

(async () => {
  let stores = [];
  try {
    await connectDB();
    
    if (fs.existsSync(OUTPUT_FILE_NAME)) {
      fs.unlinkSync(OUTPUT_FILE_NAME);
    }

    stores = await Store.aggregate(pipeline);
    
    fs.writeFileSync('outputs.json', JSON.stringify(stores));
    console.log(`${OUTPUT_FILE_NAME} file has been saved.`);

    mongoose.connection.close();
  } catch (error) {
    console.error('Error:', error);
    mongoose.connection.close();
  } finally {
    return stores;
  }
})();
