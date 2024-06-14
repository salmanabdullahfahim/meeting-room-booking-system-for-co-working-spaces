import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { bookingService } from './booking.service';
import { sendNoDataFoundResponse } from '../../utils/noDataResponse';

const createBooking = catchAsync(async (req, res) => {
  const result = await bookingService.createBookingIntoDB(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Booking created successfully',
    data: result,
  });
});

const getAllBooking = catchAsync(async (req, res) => {
  const result = await bookingService.getAllBookingFromDB();
  if (result.length === 0) {
    return sendNoDataFoundResponse(res);
  }
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'All bookings retrieved successfully',
    data: result,
  });
});

const updateBooking = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await bookingService.updateBookingIntoDB(id, req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Booking updated successfully',
    data: result,
  });
});

export const bookingController = {
  createBooking,
  getAllBooking,
  updateBooking,
};
