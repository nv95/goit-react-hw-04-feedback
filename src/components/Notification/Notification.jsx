import PropTypes from 'prop-types';
import { NotificationContainer } from './Notification.styled';
import { nanoid } from 'nanoid';

export const Notification = ({ message }) => {
  return <NotificationContainer key={nanoid}>{message}</NotificationContainer>;
};
Notification.propTypes = {
  message: PropTypes.string,
};
