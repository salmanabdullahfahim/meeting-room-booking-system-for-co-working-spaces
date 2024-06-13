import express from 'express';
import { slotController } from './slot.controller';
import auth from '../../middleware/auth';
import { USER_ROLE } from '../User/user.constant';
import validateRequest from '../../utils/validateRequest';
import { slotValidations } from './slot.validation';

const router = express.Router();

router.post(
  '/',
  auth(USER_ROLE.admin),
  validateRequest(slotValidations.createSlotValidationSchema),
  slotController.createSlot,
);
router.get('/availability', slotController.availableSlots);

export const slotRoutes = router;
