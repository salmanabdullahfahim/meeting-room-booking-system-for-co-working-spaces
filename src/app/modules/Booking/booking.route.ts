import express from 'express';
import validateRequest from '../../utils/validateRequest';
import { bookingValidations } from './booking.validation';
import { bookingController } from './booking.controller';
import auth from '../../middleware/auth';
import { USER_ROLE } from '../User/user.constant';

const router = express.Router();

router.post(
  '/',
  auth(USER_ROLE.user),
  validateRequest(bookingValidations.createBookingValidationSchema),
  bookingController.createBooking,
);

router.get('/', auth(USER_ROLE.admin), bookingController.getAllBooking);
router.put('/:id', auth(USER_ROLE.admin), bookingController.updateBooking);

export const bookingRoutes = router;
