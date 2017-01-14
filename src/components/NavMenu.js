import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar';
import Badge from 'material-ui/Badge';
import FontIcon from 'material-ui/FontIcon';
import {StyleSheet, css} from 'aphrodite';
import classNames from 'classNames';
import {fromJS} from 'immutable';
import colors from '~/utils/colors';
import { Link } from 'react-router';


export class NavMenu extends Component {
  static propTypes = {
    user: PropTypes.object,
    cart: PropTypes.object,
    wishlist: PropTypes.object
  }
  render() {
    const { user, cart, wishlist } = this.props;
      return (
        <Drawer containerStyle={nonAphroditeStyles}>
          <div className={css(styles.logo)}>
            <h2 className={css(styles.header)}>
              <FontIcon className={classNames("material-icons", css(styles.logoStyle))}
              color={colors.white}>shopping_cart</FontIcon>
              eCartCloud
            </h2>
          </div>
          <div className={css(styles.profile)}>
            <Avatar src={user.getIn(['picture', 'data', 'url'])}
              size={150} style={{margin: '0 auto', 'display': 'block'}} />
            <h3 className={css(styles.name)}>Welcome {user.get('full_name')}!</h3>
          </div>
          <MenuItem className={css(styles.menuStyle)}>
            <Link to="/cart">
              <FontIcon className={classNames("material-icons", css(styles.fontStyle))}
                color={colors.white}>shopping_cart</FontIcon>
              <span className={css(styles.menuText)}>Cart</span>
              <span className={css(styles.badgeWrap)}>
                <Badge
                  badgeContent={cart.size}
                  secondary={true}
                  badgeStyle={badgeStyle} />
              </span>
            </Link>
          </MenuItem>
          <MenuItem className={css(styles.menuStyle)}>
            <Link to="/wishlist">
              <FontIcon className={classNames("material-icons", css(styles.fontStyle))}
                color={colors.white}>favorite</FontIcon>
              <span className={css(styles.menuText)}>Wishlist</span>
              <span className={css(styles.badgeWrap)}>
                <Badge
                badgeContent={wishlist.size}
                primary={true}
                badgeStyle={badgeStyle} />
              </span>
            </Link>
          </MenuItem>
          <MenuItem className={css(styles.menuStyle)}>
            <Link to="/history">
              <FontIcon className={classNames("material-icons", css(styles.fontStyle))}
               color={colors.white}>history</FontIcon>
              <span className={css(styles.menuText)}>History</span>
            </Link>
          </MenuItem>
        </Drawer>
      );
    }
}

const styles = StyleSheet.create({
  menuStyle: {
    color: colors.white
  },
  menuText: {
    padding: '0 10px',
    color: colors.white,
    textDecoration: 'none'
  },
  fontStyle: {
    verticalAlign: 'middle'
  },
  profile: {
    padding: '16px',
    color: colors.white
  },
  logo: {
    padding: '16px',
    color: colors.white
  },
  header: {
    fontSize: '16px',
    fontWeight: 'normal',
    textAlign: 'center'
  },
  name: {
    fontWeight: 'normal',
    fontSize: '16px',
    textAlign: 'center'
  },
  logoStyle: {
    fontSize: '30px',
    color: colors.accent1Color,
    verticalAlign: 'middle',
    marginRight: '5px'
  }
});

const nonAphroditeStyles = {
  backgroundColor: '#424242'
};

const badgeStyle = {
  top: 'initial',
  right: 'initial',
  position: 'initial',
  width: '34px',
  height: '27px',
  borderRadius: '26%'
};

const actions = {

};

const mapStateToProps = (state) => {
  const user = fromJS(state).getIn(['user', 'entities'], fromJS({}));
  const cart = fromJS(state).getIn(['cart', 'entities'], fromJS({}));
  const wishlist = fromJS(state).getIn(['wishlist', 'entities'], fromJS({}));
  return {
    user: user,
    cart: cart,
    wishlist: wishlist
  };
};


export default connect(mapStateToProps, actions)(NavMenu);
