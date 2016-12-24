import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {Container, Row} from 'react-grid-system';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import FontIcon from 'material-ui/FontIcon';
import {StyleSheet, css} from 'aphrodite';
import classNames from 'classNames';
import {fromJS} from 'immutable';
import colors from '~/utils/colors';


export class NavMenu extends Component {
  static propTypes = {
  }
  render() {
      return (
        <Drawer containerStyle={nonAphroditeStyles}>
          <MenuItem className={css(styles.menuStyle)}>    
            <Badge
              badgeContent={10}
              secondary={true}
              badgeStyle={{top: 12, right: 12}}>
              <IconButton tooltip="Cart">
                <FontIcon className={classNames("material-icons", css(styles.fontStyle))}
                 color={colors.white}>shopping_cart</FontIcon>
              </IconButton>
            </Badge>
            <span className={css(styles.menuText)}>Cart</span>
          </MenuItem>
          <MenuItem className={css(styles.menuStyle)}>
            <FontIcon className={classNames("material-icons", css(styles.fontStyle))} 
              color={colors.white}>favorite</FontIcon>
            <span className={css(styles.menuText)}>Wishlist</span>
          </MenuItem>
          <MenuItem className={css(styles.menuStyle)}>
            <FontIcon className={classNames("material-icons", css(styles.fontStyle))}
             color={colors.white}>history</FontIcon>
            <span className={css(styles.menuText)}>History</span>
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
    padding: '0 10px'
  },
  fontStyle: {
    verticalAlign: 'middle'
  }
});

const nonAphroditeStyles = {
  backgroundColor: '#424242'
};

const actions = {

};

const mapStateToProps = (state) => {
  const login = fromJS(state).get('login');
  return {
  };
};


export default connect(mapStateToProps, actions)(NavMenu);