import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {increment} from '~/actions/login';
import {LoginForm} from '~/components/Login';
import { Container, Row } from 'react-grid-system';
import { indigo500 } from 'material-ui/styles/colors';
import FontIcon from 'material-ui/FontIcon';
import { StyleSheet, css } from 'aphrodite';
import classNames from 'classNames';

export class LoginView extends Component {
static propTypes = {
  increment: PropTypes.func,
}
render() {
  const { increment } = this.props;
    return (
      <Container fluid={true}>
        <Row>
          <div className={css(styles.rowStyle)}>
            <h1 className={css(styles.headerStyle)} onClick={() => increment(1)}>eCartCloud</h1>
            <FontIcon className={classNames("material-icons", css(styles.iconStyle))} color={indigo500}>shopping_cart</FontIcon>
            </div>
        </Row>
        <LoginForm />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  headerStyle: {
      color: indigo500,
      fontWeight: 200,
      display: 'inline-block',
      marginRight: '10px'
  },
  iconStyle: {
      color: indigo500,
      display: 'inline-block'
  },
  rowStyle: {
    textAlign: 'center',
    marginTop: '20px'
  }
});

const actions = {
  increment
};

const mapStateToProps = () => {
  return {
  };
};


export default connect(mapStateToProps, actions)(LoginView);
