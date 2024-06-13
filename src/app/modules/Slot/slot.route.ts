import express from 'express';
import { slotController } from './slot.controller';
import auth from '../../middleware/auth';
import { USER_ROLE } from '../User/user.constant';

const router = express.Router();

router.post('/', auth(USER_ROLE.admin), slotController.createSlot);
router.get('/availability', slotController.availableSlots);

export const slotRoutes = router;
