import { store } from '@/store/index';
import { NotificationType } from '@/interfaces/INotification';
type Notifier = {
  notify: (type: NotificationType, title: string, message: string) => void;
};

export default (): Notifier => {
  const notify = (type: NotificationType, title: string, message: string) => {
    store.commit('ADD_NOTIFICATION', {
      title,
      message,
      type,
    });
  };

  return {
    notify,
  }
};
