import Base from '@db/base';

export default {
  get: async () => {
    const devices = await Base.ref('/tasmota/devices').get();
    if (devices.exists()) return Object.values(devices.val());
    return [];
  },
  getByTopic: async (shorId: string): Promise<any> => {
    const devices = await Base.ref('/tasmota/devices').get();
    if (devices.exists()) {
      const values = Object.values(devices.val());
      return values.filter((device: any) => device.topic === shorId)[0] ?? null;
    }
    return null;
  },
};
