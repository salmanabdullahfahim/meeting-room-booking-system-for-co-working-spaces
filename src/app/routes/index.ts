import { Router } from 'express';
import { roomRoutes } from '../modules/Room/room.route';

const router = Router();

const moduleRoutes = [{ path: '/rooms', route: roomRoutes }];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
