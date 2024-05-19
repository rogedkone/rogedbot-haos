import { Composer, Scenes } from 'telegraf';
import { message } from 'telegraf/filters';

const messageValidator = new Composer<Scenes.WizardContext>();
messageValidator.on(message('text'), (ctx) => {
  ctx.reply('Воу это текст');
  ctx.wizard.next();
});
messageValidator.use((ctx) => ctx.reply('Сообщение должно быть текстом'));

const addNewBroker = new Scenes.WizardScene(
  'brokers/add_new_broker',
  async (ctx) => {
    ctx.reply('Введи имя брокера');
    return ctx.wizard.next();
  },
  messageValidator,
  async (ctx) => {
    console.log(ctx);
    return ctx.scene.leave();
  },
);
export default addNewBroker;
