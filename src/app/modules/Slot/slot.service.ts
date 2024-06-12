import { Slot } from './slot..model';
import { TSlot } from './slot.interface';
import { formatTime, parseTime } from './slot.utils';

// slot duration in minutes
const slotDurationInMinutes = 60;

const createSlotIntoDB = async (payload: TSlot) => {
  const { room, date, startTime, endTime } = payload;

  // parse time string to minutes
  const start = parseTime(startTime);
  const end = parseTime(endTime);
  const slots = [];

  for (
    let current = start;
    current + slotDurationInMinutes <= end;
    current += slotDurationInMinutes
  ) {
    const slotStart = formatTime(current);
    const slotEnd = formatTime(current + slotDurationInMinutes);

    const slot = await Slot.create({
      room,
      date,
      startTime: slotStart,
      endTime: slotEnd,
      isBooked: false,
    });
    slots.push(slot);
  }

  return slots;
};

export const slotService = {
  createSlotIntoDB,
};
