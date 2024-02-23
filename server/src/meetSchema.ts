import mongoose, { Document } from 'mongoose';

// Define the interface for the Meet document
export interface IMeet extends Document {
  meetId: string;
  customers: string[]; // Assuming customers are represented by their IDs
  shopId: string;
  productId: string;
  timestamp: Date;
}

const { Schema } = mongoose;

const meetSchema = new Schema<IMeet>({
  meetId: {
    type: String,
    required: true
  },
  customers: {
    type: [String], // Assuming customers are represented by their IDs
    default: []
  },
  shopId: {
    type: String,
    required: true
  },
  productId: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

const Meet = mongoose.model<IMeet>('Meet', meetSchema);

export default Meet;
// export { IMeet };
