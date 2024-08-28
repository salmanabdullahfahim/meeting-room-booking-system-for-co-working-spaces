import { User } from './user.model';

const getSingleUser = async (email: string) => {
  const result = await User.findOne({ email: email });
  return result;
};

export const UserServices = {
  getSingleUser,
};
