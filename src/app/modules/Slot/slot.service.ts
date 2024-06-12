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

    // create slot into db
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

// get available slots from db
const getAvailableSlotsFromDb = async (date?: string, roomId?: string) => {
  const query: { date?: string; room?: string; isBooked?: boolean } = {
    isBooked: false,
  };
  if (date) {
    query.date = date;
  }
  if (roomId) {
    query.room = roomId;
  }

  const availAbleSlots = await Slot.find(query).populate('room');
  return availAbleSlots;
};

export const slotService = {
  createSlotIntoDB,
  getAvailableSlotsFromDb,
};
