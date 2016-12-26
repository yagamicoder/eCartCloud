import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import colors from '~/utils/colors';
import FontIcon from 'material-ui/FontIcon';
import classNames from 'classNames';

const NoProductsView = () => {
	return (
		<div className={css(styles.noProductsWrap)}>
			<h2 className={css(styles.headerStyle)}>No products to display.</h2>
			<FontIcon className={classNames("material-icons", css(styles.iconStyle))}
			color={colors.primary1Color}>shopping_cart</FontIcon>	
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
  noProductsWrap: {
  	padding: '30px 0',
  	textAlign: 'center'
  },
  iconStyle: {
  	fontSize: '7em'
  }
});

export default NoProductsView;