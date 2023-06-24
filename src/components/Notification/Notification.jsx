import { Component } from 'react';
import PropTypes from 'prop-types';
import ParagraphNotify from './Notification.styled';

class Notification extends Component {
  render() {
    const { message } = this.props;
    return <ParagraphNotify>{message}</ParagraphNotify>;
  }
}

Notification.propTypes = {
  message: PropTypes.string,
};
export default Notification;
