import { Router } from 'express';
import { roomRoutes } from '../modules/Room/room.route';
import { slotRoutes } from '../modules/Slot/slot.route';
import { authRoutes } from '../modules/Auth/auth.route';
import { bookingRoutes } from '../modules/Booking/booking.route';
import auth from '../middleware/auth';
import { USER_ROLE } from '../modules/User/user.constant';
import { bookingController } from '../modules/Booking/booking.controller';
import { userRoutes } from '../modules/User/user.route';
import { paymentRoutes } from '../modules/Payment/payment.route';

const router = Router();

const moduleRoutes = [
  { path: '/rooms', route: roomRoutes },
  { path: '/slots', route: slotRoutes },
  { path: '/bookings', route: bookingRoutes },
  { path: '/auth', route: authRoutes },
  { path: '/user', route: userRoutes },
  { path: '/payment', route: paymentRoutes },
];

router.get(
  '/my-bookings',
  auth(USER_ROLE.user),
  bookingController.getUserBooking,
);
moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
