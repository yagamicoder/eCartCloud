import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {login} from '~/reducers/login';
import { StyleSheet, css } from 'aphrodite';
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
    //Only call login if you have access token
    if (response.accessToken) {
      login(response);
    }
  }

  render () {
    return (
      <Row>
        <Col md={12}>
          <div className={css(styles.facebookBtnWrap)}>
            <hr/>
            <p>Or login with your Facebook account.</p>
            <FacebookLogin
              appId="1715370978779177"
              autoLoad={true}
              fields="name,email,picture.width(800)"
              callback={this.handleFacebookResponse}
              cssClass="buttonOveride"
              icon="fa-facebook" />
          </div>
        </Col>
      </Row>
    );
  }
}

const styles = StyleSheet.create({
  facebookBtnWrap: {
    padding: '15px 0',
    textAlign: 'center'
  }
});

const actions = {
  login
};

const mapStateToProps = () => {
  return {
  };
};


export default connect(mapStateToProps, actions)(FacebookButton);
