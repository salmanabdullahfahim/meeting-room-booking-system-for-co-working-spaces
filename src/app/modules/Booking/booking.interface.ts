import { Types } from 'mongoose';

export type TBooking = {
  room: Types.ObjectId;
  slots: Types.ObjectId[];
  user: Types.ObjectId;
  date: string;
  totalAmount: number;
  transactionId?: string;
  paymentStatus: string;
  isConfirmed: 'confirmed' | 'unconfirmed' | 'canceled';
  isDeleted: boolean;
};
