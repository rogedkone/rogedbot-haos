import Base from '../base';

export default {
  updateId: async (id: number | null) => {
    await Base.ref('/telegram/message_id').set(id);
  },
  getId: async () => {
    const res = await Base.ref('/telegram/message_id').get();
    if (res.exists()) return res.val();
    return null;
  },
  removeId: async () => {
    await Base.ref('/telegram/message_id').remove();
  },
};
