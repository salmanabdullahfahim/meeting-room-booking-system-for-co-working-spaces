import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { slotService } from './slot.service';
import { sendNoDataFoundResponse } from '../../utils/noDataResponse';

const createSlot = catchAsync(async (req, res) => {
  const result = await slotService.createSlotIntoDB(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Slots created successfully',
    data: result,
  });
});

const availableSlots = catchAsync(async (req, res) => {
  const result = await slotService.getAvailableSlotsFromDb(req.query);
  if (result.length === 0) {
    return sendNoDataFoundResponse(res);
  } else {
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Available slots retrieved successfully',
      data: result,
    });
  }
});

const getFullSlot = catchAsync(async (req, res) => {
  const result = await slotService.getFullSlotFromDB();
  if (result.length === 0) {
    return sendNoDataFoundResponse(res);
  } else {
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Full slots retrieved successfully',
      data: result,
    });
  }
});

const updateSlot = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await slotService.updateSingleSlotFromDB(id, req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Slot updated successfully',
    data: result,
  });
});

const deleteSlot = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await slotService.deleteSingleSlotFromDB(id);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Slot deleted successfully',
    data: result,
  });
});

const getSingleSlot = catchAsync(async (req, res) => {
  const result = await slotService.getSingleSlotFromDB(req.params.id);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Slot retrieved successfully',
    data: result,
  });
});

export const slotController = {
  createSlot,
  availableSlots,
  getFullSlot,
  updateSlot,
  deleteSlot,
  getSingleSlot,
};
