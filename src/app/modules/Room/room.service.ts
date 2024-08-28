import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { TRoom } from './room.interface';
import { Room } from './room.model';

const createRoomIntoDB = async (payload: TRoom) => {
  const result = await Room.create(payload);

  return result;
};

const getAllRoomsFromDB = async () => {
  const result = await Room.find({ isDeleted: false });
  return result;
};

const getSingleRoomFromDB = async (id: string) => {
  const result = await Room.findById(id);
  if (!result) throw new AppError(httpStatus.NOT_FOUND, 'Invalid Room Id');
  return result;
};

const updateRoomIntoDB = async (id: string, payload: Partial<TRoom>) => {
  const result = await Room.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });

  if (!result) throw new AppError(httpStatus.NOT_FOUND, 'Invalid Room Id');
  return result;
};

const deleteRoomFromDB = async (id: string) => {
  const result = await Room.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true },
  );

  if (!result) throw new AppError(httpStatus.NOT_FOUND, 'Invalid Room Id');
  return result;
};

export const RoomServices = {
  createRoomIntoDB,
  getAllRoomsFromDB,
  getSingleRoomFromDB,
  updateRoomIntoDB,
  deleteRoomFromDB,
};
