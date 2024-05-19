import Base from '@db/base';

export default {
  get: async ({ id }: { id: string }) => {
    const config = await Base.ref(`/tasmota/devices/${id}/sensors`).get();
    if (config.exists()) return config.val();
    return null;
  },
  set: async ({ id, payload }: { id: string; payload: any }) => {
    await Base.ref(`/tasmota/devices/${id}/sensors`).set(payload);
  },
  remove: async ({ id }: { id: string }) => {
    await Base.ref(`/tasmota/devices/${id}/sensors`).remove();
  },
};
