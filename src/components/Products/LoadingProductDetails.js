import React, {PropTypes} from 'react';
import FontIcon from 'material-ui/FontIcon';
import colors from '~/utils/colors';
import classNames from 'classNames';
import { StyleSheet, css } from 'aphrodite';
import CircularProgress from 'material-ui/CircularProgress';

const LoadingProductDetails = ({error, loading}) => {
	return (
		<div>
		{error ?
			<div className={css(styles.errorStyle)}>
				<h3 className={css(styles.errorMessage)}>Error fetching product. Please trying again later.</h3>
				<div>
					<FontIcon className={classNames("material-icons", css(styles.errorIcon))}
						color={colors.primary1Color}>error</FontIcon>
				</div>
			</div>	: null
		}
		{loading ?
			<div className={css(styles.loadingWrap)}>
				<h2 className={css(styles.headerStyle)}>Fetching product information...</h2>
				<CircularProgress size={70} thickness={4} className={css(styles.loadingIcon)} />
			</div> : null
			}
		</div>
	);
};

const styles = StyleSheet.create({
	errorIcon: {
		textAlign: 'center',
		fontSize: '6em'
	},
	errorStyle: {
		padding: '25px 0',
		textAlign: 'center',
		borderBottom: '1px solid #E0E0E0'
	},
	errorMessage: {
		color: colors.primary1Color,
		fontWeight: 'normal',
		textAlign: 'center'
	},
	loadingIcon: {
  	display: 'block',
  	margin: '45px auto'
  },
  headerStyle: {
  	fontWeight: 'normal',
  	textAlign: 'center',
  	color: colors.primary1Color
  },
  loadingWrap: {
  	padding: '25px 0',
  	borderBottom: '1px solid #E0E0E0'
  }
});

LoadingProductDetails.propTypes = {
	loading: PropTypes.bool,
	error: PropTypes.bool
};

export default LoadingProductDetails;
