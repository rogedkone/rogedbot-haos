import Base from '@db/base';

export default {
  get: async (id: string) => {
    const devices = await Base.ref(`/tasmota/devices/${id}/tele/lwt`).get();
    if (devices.exists()) return devices.val();
    return null;
  },
  set: async (id: string, payload: boolean) => {
    await Base.ref(`/tasmota/devices/${id}/tele/lwt`).set(payload);
  },
};
