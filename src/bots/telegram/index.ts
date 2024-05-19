import {
  Scenes, Telegraf, session,
} from 'telegraf';
import constants from '@utils/constants';
import { start } from './commands';
import brokers from './modules/brokers';

const Bot = new Telegraf<Scenes.WizardContext>(constants.TG_BOT_TOKEN);

const work = () => {
  setTimeout(() => {
    // delete_bot_messages();
    work();
  }, 1000 * 60 * 1.1);
};

Bot.launch(() => {
  console.log(`${constants.BOT_NAME} ${constants.BOT_VERSION} started`);
  work();
});

Bot.use(session());

// stages
Bot.use(brokers.stages.middleware());
// actions
Bot.use(brokers.actions.middleware());
// commands
Bot.use(start);
// events

export default Bot;
