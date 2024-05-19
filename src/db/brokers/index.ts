import Base from '../base';
import { Broker } from './types';

const get = async (user_id: number): Promise<Broker[]> => {
  const users = await Base.ref(`brokers/${user_id}`).get();
  if (users.exists()) return Object.values(users.val() ?? []);
  return [];
};

const isBrokerExist = async (user_id: number, broker_ip: string) => {
  const brokers = await get(user_id);
  return brokers.some((broker: Broker) => broker.ip === broker_ip);
};

const add = async (user_id: number, broker: Broker) => {
  if (!(await isBrokerExist(user_id, broker.ip))) await Base.ref(`brokers/${user_id}`).push(broker);
};

const remove = async (user_id: number, broker_ip: string) => {
  const brokers = await get(user_id);
  await Base.ref(`brokers/${user_id}`).set(brokers.filter((broker: Broker) => broker.ip !== broker_ip));
};

export default {
  get,
  add,
  remove,
};
