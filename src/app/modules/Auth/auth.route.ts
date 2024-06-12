import express from 'express';
import validateRequest from '../../utils/validateRequest';
import { userValidations } from '../User/user.validation';
import { authController } from './auth.controller';
import { authValidations } from './auth.validation';

const router = express.Router();

router.post(
  '/signup',
  validateRequest(userValidations.userValidationSchema),
  authController.signUp,
);

router.post(
  '/login',
  validateRequest(authValidations.loginValidationSchema),
  authController.loginUser,
);

export const authRoutes = router;
