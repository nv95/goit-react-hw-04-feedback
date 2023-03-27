import { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { NotificationContainer } from './Notification.styled';

class Notification extends Component {
  static defaultProps = {
    message: ' ',
  };
  static propTypes = {
    Message: PropTypes.string,
  };
  render() {
    return (
      <NotificationContainer key={shortid.generate()}>
        {this.props.message}
      </NotificationContainer>
    );
  }
}

export default Notification;
