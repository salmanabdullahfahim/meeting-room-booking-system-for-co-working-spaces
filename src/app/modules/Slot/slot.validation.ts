import { z } from 'zod';

const createSlotValidationSchema = z.object({
  body: z.object({
    room: z.string({ required_error: 'Room is required' }),
    date: z.string({ required_error: 'Date is required' }),
    startTime: z.string({ required_error: 'Start Time is required' }),
    endTime: z.string({ required_error: 'End Time is required' }),
  }),
});

export const slotValidations = {
  createSlotValidationSchema,
};
