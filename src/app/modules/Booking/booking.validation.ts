import { z } from 'zod';

const dateValidationRegex = /^\d{4}-\d{2}-\d{2}$/;
const createBookingValidationSchema = z.object({
  body: z.object({
    room: z.string({ required_error: 'Room is required' }),
    slots: z.array(z.string({ required_error: 'Slot is required' })),
    user: z.string({ required_error: 'User is required' }),
    date: z
      .string({ required_error: 'Date is required' })
      .refine(
        (val) =>
          dateValidationRegex.test(val) && !isNaN(new Date(val).getTime()),
        {
          message: 'Invalid date format, please use YYYY-MM-DD',
        },
      ),
  }),
});

export const bookingValidations = {
  createBookingValidationSchema,
};
