// Libraries
import mongoose, { Schema, Document } from 'mongoose';

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

export const Store = mongoose.model<IStore>('Store', StoreSchema);
