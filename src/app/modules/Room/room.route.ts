import express from 'express';
import validateRequest from '../../utils/validateRequest';
import { roomValidations } from './room.validation';
import { roomController } from './room.controller';
import auth from '../../middleware/auth';
import { USER_ROLE } from '../User/user.constant';

const router = express.Router();

router.post(
  '/',
  auth(USER_ROLE.admin),
  validateRequest(roomValidations.createRoomValidationSchema),
  roomController.createRoom,
);

router.get('/', roomController.getAllRoom);

router.get(
  '/all-types-room',
  auth(USER_ROLE.admin),
  roomController.getAllTypesRooms,
);

router.get('/:id', roomController.getSingleRoom);

router.put(
  '/:id',
  auth(USER_ROLE.admin),
  validateRequest(roomValidations.updateRoomValidationSchema),
  roomController.updateRoom,
);

router.delete('/:id', auth(USER_ROLE.admin), roomController.deleteRoom);

export const roomRoutes = router;
