import express from 'express';
import validateRequest from '../../utils/validateRequest';
import { bookingValidations } from './booking.validation';

const router = express.Router();

router.post(
  '/',
  validateRequest(bookingValidations.createBookingValidationSchema),
  bookingController.createBooking,
);

export const bookingRoutes = router;
