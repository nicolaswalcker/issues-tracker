import { store } from '@/store/index';
import { NotificationType } from '@/interfaces/INotification';
export const notify = {
  methods: {
    notify(type: NotificationType, title: string, message: string) {
      store.commit('ADD_NOTIFICATION', {
        title,
        message,
        type,
      });
    },
  }
}