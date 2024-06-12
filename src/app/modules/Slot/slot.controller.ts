import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { slotService } from './slot.service';

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
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Available slots retrieved successfully',
    data: result,
  });
});

export const slotController = {
  createSlot,
  availableSlots,
};
