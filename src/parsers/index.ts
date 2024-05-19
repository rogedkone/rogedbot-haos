import tasmota from './tasmota';
import tele from './tele';

const parsers = (path: string[], message: string) => {
  switch (path[0]) {
    case 'tasmota':
      return tasmota(path, message);
    case 'tele':
      return tele(path, message);
    default:
      return null;
  }
};

export default parsers;
