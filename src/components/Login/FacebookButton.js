import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import colors from '~/utils/colors';
import FontIcon from 'material-ui/FontIcon';
import { StyleSheet, css } from 'aphrodite';
import classNames from 'classNames';
import { Row, Col } from 'react-grid-system';

const FacebookButton = () => {
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
        </div>
      </Col>
    </Row>
  );
};

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

export default FacebookButton;
