import express from 'express';
import validateRequest from '../../utils/validateRequest';
import { userValidations } from '../User/user.validation';

const router = express.Router();

router.post(
  '/signup',
  validateRequest(userValidations.userValidationSchema),
  authController.Signup,
);

export const authRoutes = router;
