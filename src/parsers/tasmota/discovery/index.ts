import DB from '@db/api';

const discovery = (path: string[], message: string) => {
  const payload = JSON.parse(message);
  switch (path[3]) {
    case 'config':
      DB.tasmota.device.config.set({
        id: path[2],
        payload: {
          ip: payload.ip,
          name: payload.dn,
          mac: payload.mac,
          model: payload.md,
          states: payload.state,
          topic: payload.t,
          topics: payload.tp,
        },
      });
      // console.log('CONFIG', jsoned);
      return null;
    case 'sensors':
      DB.tasmota.device.sensors.set({ id: path[2], payload });
      // console.log('SENSORS', jsoned);
      return null;
    default:
      return null;
  }
};

export default discovery;
