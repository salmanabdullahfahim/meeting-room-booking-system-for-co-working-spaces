import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { Slot } from './slot..model';
import { TSlot, TSlotQuery } from './slot.interface';
import { formatTime, parseTime } from './slot.utils';

// slot duration in minutes
const slotDurationInMinutes = 60;

const createSlotIntoDB = async (payload: TSlot) => {
  const { room, date, startTime, endTime } = payload;

  // parse time string to minutes
  const start = parseTime(startTime);
  const end = parseTime(endTime);

  if (start >= end) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      'startTime should be before endTime',
    );
  }
  const slots = [];

  for (
    let current = start;
    current + slotDurationInMinutes <= end;
    current += slotDurationInMinutes
  ) {
    const slotStart = formatTime(current);
    const slotEnd = formatTime(current + slotDurationInMinutes);

    // check for existing slots that overlap
    const existingSlot = await Slot.findOne({
      room,
      date,
      startTime: slotStart,
      endTime: slotEnd,
    });

    if (existingSlot) {
      throw new AppError(httpStatus.CONFLICT, `Slot already exists`);
    }

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
const getAvailableSlotsFromDb = async (queryParams: TSlotQuery) => {
  const query: { date?: string; room?: string; isBooked?: boolean } = {
    isBooked: false,
  };
  if (queryParams?.date) {
    query.date = queryParams.date;
  }
  if (queryParams?.roomId) {
    query.room = queryParams.roomId;
  }

  const availAbleSlots = await Slot.find(query).populate('room');
  return availAbleSlots;
};

export const slotService = {
  createSlotIntoDB,
  getAvailableSlotsFromDb,
};
