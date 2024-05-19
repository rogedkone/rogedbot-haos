import DB from '@db/api';

const tele = async (path: string[], message: string) => {
  if (path[2] === 'LWT') {
    const device = await DB.tasmota.devices.getByTopic(path[1]);
    if (device) {
      await DB.tasmota.device.tele.lwt.set(device.mac, message === 'Online');
    }
  }
};

export default tele;
