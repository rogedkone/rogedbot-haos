import Base from '@db/base';
import config from './config';
import sensors from './sensors';
import tele from './tele';

export default {
  config,
  sensors,
  tele,
  remove: async ({ id }: { id: string }) => {
    await Base.ref(`/tasmota/devices/${id}`).remove();
  },
};
