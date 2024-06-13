import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { RoomServices } from './room.service';
import { sendNoDataFoundResponse } from '../../utils/noDataResponse';

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
  if (result.length === 0) {
    return sendNoDataFoundResponse(res);
  }
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

const updateRoom = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await RoomServices.updateRoomIntoDB(id, req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Room updated successfully',
    data: result,
  });
});

const deleteRoom = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await RoomServices.deleteRoomFromDB(id);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Room deleted successfully',
    data: result,
  });
});

export const roomController = {
  createRoom,
  getAllRoom,
  getSingleRoom,
  updateRoom,
  deleteRoom,
};
