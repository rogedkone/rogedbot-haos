import { AceBase } from 'acebase';
import path from 'path';
import constants from '@utils/constants';

const name = `${constants.BOT_NAME.split(' ').join('_')}_${constants.BOT_VERSION}`;

console.log(`Roged ${name} started`);
console.log(path.resolve(__dirname, '..', '..', '..', 'database'));

export default new AceBase(`roged_bot_${name}`, {
  logLevel: 'error',
  storage: { path: path.resolve(__dirname, '..', '..', '..', 'database') },
});
