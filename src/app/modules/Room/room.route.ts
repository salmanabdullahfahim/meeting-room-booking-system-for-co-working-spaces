import express from 'express';
import validateRequest from '../../utils/validateRequest';
import { roomValidations } from './room.validation';
import { roomController } from './room.controller';

const router = express.Router();

router.post(
  '/',
  validateRequest(roomValidations.createRoomValidationSchema),
  roomController.createRoom,
);

router.get('/', roomController.getAllRoom);

router.get('/:id', roomController.getSingleRoom);

router.put('/:id', roomController.updateRoom);

export const roomRoutes = router;
