import { TUser } from '../User/user.interface';
import { User } from '../User/user.model';

const signUp = async (payload: TUser) => {
  const result = await User.create(payload);
  return result;
};

export const authService = {
  signUp,
};
