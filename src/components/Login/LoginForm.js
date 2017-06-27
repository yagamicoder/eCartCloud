import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import colors from '~/utils/colors';
import FontIcon from 'material-ui/FontIcon';
import { StyleSheet, css } from 'aphrodite';
import classNames from 'classNames';
import { Row, Col } from 'react-grid-system';

const LoginForm = () => {
  return (
    <Row>
      <Col md={12}>
        <form className={css(styles.formStyle)}>
          <div className={css(styles.inputWrap)}>
            <TextField
              defaultValue="Username"
              floatingLabelText="Username or Email" />
          </div>
          <div className={css(styles.inputWrap)}>
            <TextField
              hintText="Password"
              floatingLabelText="Password"
              type="password"
              />
          </div>
          <div className={css(styles.buttonWrap)}>
            <RaisedButton
            label="Login"
            primary={true}
            className={css(styles.buttonStyle)}
            icon={<FontIcon className={classNames("material-icons", css(styles.iconStyle))} color={colors.primary1Color}>send</FontIcon>} />
          </div>
        </form>
      </Col>
    </Row>
  );
};

const styles = StyleSheet.create({
  iconStyle: {
      color: '#fff'
  },
  inputWrap: {
    paddingBottom: '5px',
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

export default LoginForm;
