import { z } from 'zod';

const createRoomValidationSchema = z.object({
  body: z.object({
    images: z
      .array(z.string().url('Each image must be a valid URL'))
      .min(2, 'At least two image is required'),
    name: z.string({ required_error: 'Room Name is required' }),
    roomNo: z.number({ required_error: 'Room Number is required' }),
    floorNo: z.number({ required_error: 'Floor Number is required' }),
    capacity: z.number({ required_error: 'Capacity is required' }),
    pricePerSlot: z.number({ required_error: 'Price Per Slot is required' }),
    amenities: z.array(z.string({ required_error: 'Amenities is required' })),
  }),
});

const updateRoomValidationSchema = z.object({
  body: z.object({
    name: z
      .string({ invalid_type_error: 'Room Name must be a string' })
      .optional(),
    roomNo: z
      .number({ invalid_type_error: 'Room Number must be a number' })
      .optional(),
    floorNo: z
      .number({ invalid_type_error: 'Floor Number must be a number' })
      .optional(),
    capacity: z
      .number({ invalid_type_error: 'Capacity must be a number' })
      .optional(),
    pricePerSlot: z
      .number({ invalid_type_error: 'Price Per Slot must be a number' })
      .optional(),
    amenities: z
      .array(z.string({ invalid_type_error: 'Amenities must be a string' }))
      .optional(),
  }),
});

export const roomValidations = {
  createRoomValidationSchema,
  updateRoomValidationSchema,
};
