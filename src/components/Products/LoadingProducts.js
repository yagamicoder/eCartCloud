import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import colors from '~/utils/colors';

const LoadingProducts = () => {
	return (
		<div className={css(styles.loadingWrap)}>
			<h2 className={css(styles.headerStyle)}>Fetching products...</h2>
			<img src={require('~/assets/images/loading.svg')} alt='Loading Icon' className={css(styles.loadingIcon)} />	
		</div>
	);
};

const styles = StyleSheet.create({
  loadingIcon: {
  	display: 'block',
  	margin: '0 auto'
  },
  headerStyle: {
  	fontWeight: 'normal',
  	textAlign: 'center',
  	color: colors.primary1Color
  },
  loadingWrap: {
  	padding: '30px 0'
  }
});

export default LoadingProducts;