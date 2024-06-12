import express from 'express';
import { slotController } from './slot.controller';

const router = express.Router();

router.post('/', slotController.createSlot);
router.get('/availability', slotController.availableSlots);

export const slotRoutes = router;
