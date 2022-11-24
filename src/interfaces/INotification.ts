export enum NotificationType {
  SUCCESS,
  ERROR,
  INFO,
}

export interface INotification {
  title: string;
  message: string;
  type: NotificationType;
  id: number;
}