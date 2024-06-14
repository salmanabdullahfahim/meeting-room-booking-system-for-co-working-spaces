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
router.get(
  '/my-bookings',
  auth(USER_ROLE.user),
  bookingController.getUserBooking,
);
router.put('/:id', auth(USER_ROLE.admin), bookingController.updateBooking);
router.delete('/:id', auth(USER_ROLE.admin), bookingController.deleteBooking);

export const bookingRoutes = router;
