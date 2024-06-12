import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { Booking } from './booking.model';

const createBooking = catchAsync(async (req, res) => {
  const result = await Booking.createBookingIntoDB(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Booking created successfully',
    data: result,
  });
});

export const bookingController = {
  createBooking,
};
