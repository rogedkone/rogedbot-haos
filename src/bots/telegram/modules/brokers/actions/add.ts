import { Composer } from 'telegraf';
import { WizardContext } from 'telegraf/scenes';

const composer = new Composer<WizardContext>();

composer.action('brokers/add', async (ctx, next) => {
  ctx.deleteMessage();
  ctx.answerCbQuery();
  ctx.scene.enter('brokers/add_new_broker');

  return next();
});

export default composer;
