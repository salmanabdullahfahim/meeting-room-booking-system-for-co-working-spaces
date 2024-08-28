import express from 'express';
import { userControllers } from './user.controller';
import auth from '../../middleware/auth';
import { USER_ROLE } from './user.constant';

const router = express.Router();

router.get('/:email', auth(USER_ROLE.user), userControllers.getUserByEmail);

export const userRoutes = router;
