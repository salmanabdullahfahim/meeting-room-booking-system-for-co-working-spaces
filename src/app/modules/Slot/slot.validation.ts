import { z } from 'zod';

const dateValidationRegex = /^\d{4}-\d{2}-\d{2}$/;

const createSlotValidationSchema = z.object({
  body: z.object({
    room: z.string({ required_error: 'Room is required' }),
    date: z
      .string({ required_error: 'Date is required' })
      .refine(
        (val) =>
          dateValidationRegex.test(val) && !isNaN(new Date(val).getTime()),
        {
          message: 'Invalid date format, please use YYYY-MM-DD',
        },
      ),
    startTime: z.string({ required_error: 'Start Time is required' }).refine(
      (val) => {
        return /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/.test(val);
      },
      {
        message: 'Invalid start time format',
      },
    ),
    endTime: z.string({ required_error: 'End Time is required' }).refine(
      (val) => {
        return /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/.test(val);
      },
      {
        message: 'Invalid end time format',
      },
    ),
  }),
});

export const slotValidations = {
  createSlotValidationSchema,
};
