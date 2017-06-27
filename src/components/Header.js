import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, css} from 'aphrodite';
import {Container, Row} from 'react-grid-system';
import Avatar from 'material-ui/Avatar';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import FontIcon from 'material-ui/FontIcon';
import colors from '~/utils/colors';
import {fromJS} from 'immutable';
import classNames from 'classNames';
import {Link} from 'react-router';
import { logout } from '~/reducers/login';

export class Header extends Component {
  static propTypes = {
	user: PropTypes.object,
  logout: PropTypes.func
  };

  render () {
  	const { user, logout } = this.props;
    return (
      <header>
	      <Container>
	        <Row>
	          <div className={css(styles.wrapper)}>
	           <div className={css(styles.userProfile)}>
	             <Avatar src={user.getIn(['picture', 'data', 'url'])}
              	  size={50} />
              	 <span className={css(styles.userName)}>{user.get('first_name')}</span>
              	 <IconMenu iconButtonElement={
              	 	<IconButton style={{padding: '0px', width: '24px', height: '24px'}}>
              	 	<FontIcon className={classNames("material-icons", css(styles.iconStyle))}
              	 	color={colors.primary1Color}>expand_more</FontIcon></IconButton>}>
              	 	<MenuItem containerElement={<Link to="/profile" />}>
              	 	 <FontIcon className={classNames("material-icons", css(styles.iconMenuStyle))}
              	 	  color={colors.primary1Color}>person</FontIcon>
              	 	 Profile
              	 	</MenuItem>
              	 	<MenuItem onClick={() => logout()}>
              	 	 <FontIcon className={classNames("material-icons", css(styles.iconMenuStyle))}
              	 	  color={colors.primary1Color}>exit_to_app</FontIcon>
              	 	 SignOut
              	 	</MenuItem>
              	 </IconMenu>
               </div>
	          </div>
	        </Row>
	      </Container>
      </header>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    padding: '10px 0 10px 210px'
  },
  iconStyle: {
  	cursor: 'pointer'
  },
  iconMenuStyle: {
  	verticalAlign: 'middle',
  	padding: '0 5px'
  },
  userProfile: {
  	display: 'flex',
  	alignItems: 'center',
  	float: 'right'
  },
  userName: {
  	padding: '0 6px',
  	color: colors.primary1Color
  }
});

const actions = {
  logout
};

const mapStateToProps = (state) => {
  const user = fromJS(state).getIn(['user', 'entities'], fromJS({}));
  return {
  	user: user
  };
};


export default connect(mapStateToProps, actions)(Header);
