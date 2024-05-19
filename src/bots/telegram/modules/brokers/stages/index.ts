import { Scenes } from 'telegraf';
import add_new_broker from './add_new_broker';

export default new Scenes.Stage<Scenes.WizardContext>([add_new_broker]);
