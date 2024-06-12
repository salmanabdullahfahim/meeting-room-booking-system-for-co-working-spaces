import express from 'express';
import { slotController } from './slot.controller';

const router = express.Router();

router.post('/', slotController.createSlot);
router.get('/availability', slotController.availableSlot);

export const slotRoutes = router;
