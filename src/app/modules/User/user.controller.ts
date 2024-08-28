import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { UserServices } from './user.service';

const getUserByEmail = catchAsync(async (req, res) => {
  const result = await UserServices.getSingleUser(req.params.email);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'User retrieved successfully',
    data: result,
  });
});

export const userControllers = {
  getUserByEmail,
};
