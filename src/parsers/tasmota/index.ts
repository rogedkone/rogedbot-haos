import discovery from './discovery';

const tasmota = (path: string[], message: string) => {
  switch (path[1]) {
    case 'discovery':
      return discovery(path, message);
    default:
      return null;
  }
};

export default tasmota;
