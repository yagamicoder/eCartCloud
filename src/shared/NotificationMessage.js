import React, { PropTypes, Component } from 'react';
import Snackbar from 'material-ui/Snackbar';

export default class NotificationMessage extends Component {
  static propTypes = {
    message: PropTypes.any,
    show: PropTypes.bool,
    handleNotificationMsg: PropTypes.func
  };

  constructor (props) {
    super(props);
    this.handleCloseNotification = this.handleCloseNotification.bind(this);
  }

  handleCloseNotification () {
    const { handleNotificationMsg } = this.props;
    handleNotificationMsg(false);
  }

  render() {
    const { message, show } = this.props;

    return (
      <div>
        <Snackbar
          open={show}
          message={message}
          autoHideDuration={5000}
          onRequestClose={this.handleCloseNotification}
          style={{textAlign: 'center'}}
        />
      </div>
    );
  }
}
