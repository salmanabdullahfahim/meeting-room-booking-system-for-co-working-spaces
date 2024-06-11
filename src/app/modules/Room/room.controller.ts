import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { RoomServices } from './room.service';

const createRoom = catchAsync(async (req, res) => {
  const result = await RoomServices.createRoomIntoDB(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Room added successfully',
    data: result,
  });
});

const getAllRoom = catchAsync(async (req, res) => {
  const result = await RoomServices.getAllRoomsFromDB();
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Rooms retrieved successfully',
    data: result,
  });
});

const getSingleRoom = catchAsync(async (req, res) => {
  const result = await RoomServices.getSingleRoomFromDB(req.params.id);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Room retrieved successfully',
    data: result,
  });
});

export const roomController = {
  createRoom,
  getAllRoom,
  getSingleRoom,
};
