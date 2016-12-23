import React from 'react';
import Avatar from 'material-ui/Avatar';
import { StyleSheet, css } from 'aphrodite';
import colors from '~/utils/colors';

const LoadingProfile = ({init}) => {
	return (
		<div>
			<Avatar src={init.getIn(['picture', 'data', 'url'])} size={150} style={{margin: '0 auto', 'display': 'block'}} />
    		<h3 className={css(styles.headerStyle)}>Welcome, {init.get('name')}!</h3>
    		<p className={css(styles.introMsg)}>Loading profile...</p>
    		<img src={require('~/assets/images/loading.svg')} alt='Loading Icon' className={css(styles.loadingIcon)} />	
		</div>
	);
};

const styles = StyleSheet.create({
  headerStyle: {
      color: colors.primary1Color,
      fontWeight: 'normal',
      textAlign: 'center'
  },
  introMsg: {
  	color: colors.primary1Color,
  	textAlign: 'center'
  },
  loadingIcon: {
  	display: 'block',
  	margin: '0 auto'
  }
});

export default LoadingProfile;