/* eslint-disable no-restricted-syntax */
import { Composer, Markup } from 'telegraf';
import constants from '@utils/constants';
import { DB } from '@db/index';

export default Composer.command('start', async (ctx, next) => {
  ctx.deleteMessage();
  const buttons: any = [];
  const keyboard = Markup.inlineKeyboard([[Markup.button.callback('Добавить брокер', 'brokers/add')], buttons]);

  const isUserExist = await DB.users.isUserExist(ctx.message.from.id);

  if (isUserExist) {
    const brokers = await DB.brokers.get(ctx.message.from.id);
    if (brokers.length > 0) {
      for (const broker of brokers) {
        buttons.push([Markup.button.callback(`${broker.name}\n${broker.ip}`, broker.ip)]);
      }
    }
  }

  ctx.reply(`${constants.BOT_NAME} ${constants.BOT_VERSION}\nПривет ${ctx.message.from.first_name}`, keyboard);

  return next();
});
