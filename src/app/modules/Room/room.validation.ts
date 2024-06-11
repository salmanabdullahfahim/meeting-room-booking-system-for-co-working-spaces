import { z } from 'zod';

const createRoomValidationSchema = z.object({
  body: z.object({
    name: z.string({ required_error: 'Room Name is required' }),
    roomNo: z.number({ required_error: 'Room Number is required' }),
    floorNo: z.number({ required_error: 'Floor Number is required' }),
    capacity: z.number({ required_error: 'Capacity is required' }),
    pricePerSlot: z.number({ required_error: 'Price Per Slot is required' }),
    amenities: z.array(z.string({ required_error: 'Amenities is required' })),
  }),
});

export const roomValidations = {
  createRoomValidationSchema,
};
