import Base from './base';
import methods from './api';

Base.ready(() => console.log('AceBase is ready for connetions'));

export default Base;
export const DB = {
  ...methods,
};
