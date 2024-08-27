import { Schema, model } from 'mongoose';
import { TRoom } from './room.interface';

const roomSchema = new Schema<TRoom>({
  images: { type: [String], required: true },
  name: { type: String, required: true },
  roomNo: { type: Number, required: true, unique: true },
  floorNo: { type: Number, required: true },
  capacity: { type: Number, required: true },
  pricePerSlot: { type: Number, required: true },
  amenities: [{ type: String, required: true }],
  isDeleted: { type: Boolean, default: false },
});

export const Room = model<TRoom>('Room', roomSchema);
