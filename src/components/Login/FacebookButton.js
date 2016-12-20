import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {login} from '~/reducers/login';
import RaisedButton from 'material-ui/RaisedButton';
import colors from '~/utils/colors';
import FontIcon from 'material-ui/FontIcon';
import { StyleSheet, css } from 'aphrodite';
import classNames from 'classNames';
import { Row, Col } from 'react-grid-system';
import FacebookLogin from 'react-facebook-login';

export class FacebookButton extends Component {

  static propTypes = {
    login: PropTypes.func
  }

  constructor(props) {
    super(props);
    this.handleFacebookResponse = this.handleFacebookResponse.bind(this);
  }

  handleFacebookResponse (response) {
    const { login } = this.props;
    login(response);
  }

  render () {
    return (
      <Row>
        <Col md={12}>
          <div className={css(styles.facebookBtnWrap)}>
            <hr/>
            <p>Or login with your Facebook account.</p>
            <RaisedButton
            label="Login"
            secondary={true}
            className={css(styles.buttonStyle)}
            icon={<FontIcon className={classNames("fa fa-facebook", css(styles.iconStyle))} color={colors.white} />} />

            <FacebookLogin
              appId="1715370978779177"
              autoLoad={true}
              fields="name,email,picture"
              callback={this.handleFacebookResponse}
              cssClass="my-facebook-button-class"
              icon="fa-facebook" />
          </div>
        </Col>
      </Row>
    );
  }
}

const styles = StyleSheet.create({
  iconStyle: {
      color: '#fff'
  },
  facebookBtnWrap: {
    padding: '15px 0',
    textAlign: 'center'
  },
  buttonStyle: {
    marginTop: '15px'
  },
  formStyle: {
    margin: '0 auto',
    display: 'block'
  },
  buttonWrap: {
    textAlign: 'center'
  }
});

const actions = {
  login
};

const mapStateToProps = (state) => {
  return {
  };
};


export default connect(mapStateToProps, actions)(FacebookButton);
