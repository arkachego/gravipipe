// Libraries
import mongoose, { Schema, Document } from 'mongoose';

const MONGO_URI = 'mongodb://admin:password@localhost:27017/?authSource=admin';

type ItemType = {
  name: string;
  quantity: number;
  price: number;
};

export interface IStore extends Document {
  store: string;
  date: Date;
  items: ItemType[];
}; 

// Define the schema
const StoreSchema: Schema = new Schema({
  store: { type: String, required: true },
  date: { type: Date, required: true },
  items: [
    {
      name: { type: String, required: true },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true },
    },
  ],
});

// Create the Mongoose model
export const Store = mongoose.model<IStore>('Store', StoreSchema);
