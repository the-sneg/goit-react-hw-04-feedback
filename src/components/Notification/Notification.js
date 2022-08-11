import s from './Notification.module.css';

export const Notification = ({ message }) => {
  return (
    <div>
      <h1 className={s.notification}>{message}</h1>
    </div>
  );
};
