import { Router } from 'express';
import { roomRoutes } from '../modules/Room/room.route';
import { slotRoutes } from '../modules/Slot/slot.route';
import { authRoutes } from '../modules/Auth/auth.route';

const router = Router();

const moduleRoutes = [
  { path: '/rooms', route: roomRoutes },
  { path: '/slots', route: slotRoutes },
  { path: '/auth', route: authRoutes },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
