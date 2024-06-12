import express from 'express';

const router = express.Router();

router.post('/', slotController.createSlot);

export const slotRoutes = router;
