import express from 'express';
import validateRequest from '../../utils/validateRequest';
import { userValidations } from '../User/user.validation';
import { authController } from './auth.controller';

const router = express.Router();

router.post(
  '/signup',
  validateRequest(userValidations.userValidationSchema),
  authController.signUp,
);

export const authRoutes = router;
