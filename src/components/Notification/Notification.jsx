import s from "./Notification.module.css";

const Notification = ({ message }) => {
  return (
    <div className={s.notification}>
      <p>{message}</p>
    </div>
  );
};

export default Notification;