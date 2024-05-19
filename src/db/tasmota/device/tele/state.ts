import Base from '@db/base';

export default {
  get: async (id: string) => {
    const devices = await Base.ref(`/tasmota/devices/${id}/tele/state`).get();
    if (devices.exists()) return devices.val();
    return null;
  },
  set: async (id: string, payload: string) => {
    await Base.ref(`/tasmota/devices/${id}/tele/state`).set(payload);
  },
  update: async (id: string, payload: object) => {
    await Base.ref(`/tasmota/devices/${id}/tele/state`).update(payload);
  },
};
