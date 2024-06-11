import express from 'express';
import validateRequest from '../../utils/validateRequest';
import { roomValidations } from './room.validation';

const router = express.Router();

router.post(
  '/',
  validateRequest(roomValidations.createRoomValidationSchema),
  roomController.createRoom,
);

export const roomRoutes = router;
