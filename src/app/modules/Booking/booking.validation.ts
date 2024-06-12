import { z } from 'zod';

const createBookingValidationSchema = z.object({
  body: z.object({
    room: z.string({ required_error: 'Room is required' }),
    slots: z.array(z.string({ required_error: 'Slot is required' })),
    user: z.string({ required_error: 'User is required' }),
    date: z.string({ required_error: 'Date is required' }),
    totalAmount: z.number({ required_error: 'Total Amount is required' }),
  }),
});

export const bookingValidations = {
  createBookingValidationSchema,
};
