import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {LoginForm, FacebookButton, LoadingProfile} from '~/components/Login';
import {Container, Row} from 'react-grid-system';
import colors from '~/utils/colors';
import FontIcon from 'material-ui/FontIcon';
import {StyleSheet, css} from 'aphrodite';
import classNames from 'classNames';
import {fromJS} from 'immutable';

export class LoginView extends Component {
static propTypes = {
  loadingProfile: PropTypes.bool,
  init: PropTypes.object
}
render() {
  const { loadingProfile, init } = this.props;
    return (
      <Container>
        <Row>
          <div className={css(styles.rowStyle)}>
            <h1 className={css(styles.headerStyle)}>eCartCloud</h1>
            <FontIcon className={classNames("material-icons", css(styles.iconStyle))} color={colors.primary1Color}>shopping_cart</FontIcon>
          </div>
        </Row>
        {loadingProfile ? <LoadingProfile init={init} /> : <div><LoginForm /> <FacebookButton /></div>}
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  headerStyle: {
      color: colors.primary1Color,
      fontWeight: 200,
      display: 'inline-block',
      marginRight: '10px'
  },
  iconStyle: {
      color: colors.primary1Color,
      display: 'inline-block'
  },
  rowStyle: {
    textAlign: 'center',
    marginTop: '20px'
  }
});

const actions = {
};

const mapStateToProps = (state) => {
  const login = fromJS(state).get('login');
  return {
    init: login.get('init', fromJS({})),
    loadingProfile: login.get('loadingProfile', false)
  };
};


export default connect(mapStateToProps, actions)(LoginView);
