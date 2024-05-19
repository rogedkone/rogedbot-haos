import Base from '../base';
import { User } from './types';

const get = async (): Promise<User[]> => {
  const users = await Base.ref('users').get();
  if (users.exists()) return Object.values(users.val() ?? []);
  return [];
};

const isUserExist = async (user_id: number) => {
  const users = await get();
  return users.some((user: User) => user.id === user_id);
};

const add = async (user: User) => {
  const isExist = await isUserExist(user.id);
  if (!isExist) Base.ref(`users/${user.id}`).set(user);
};

export default {
  get,
  add,
  isUserExist,
};
