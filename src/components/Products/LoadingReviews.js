import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import colors from '~/utils/colors';
import { StyleSheet, css } from 'aphrodite';

const LoadingReviews = () => {
	return (
		<div className={css(styles.loadingReviewsWrap)}>
			<h3 className={css(styles.loadingMsg)}>Loading reviews...</h3>
			<CircularProgress size={170} thickness={4} />
		</div>
	);
};

const styles = StyleSheet.create({
	loadingMsg: {
		color: colors.primary1Color,
		fontWeight: 'normal',
		marginBottom: '25px'
	},
	loadingReviewsWrap: {
		textAlign: 'center'
	}
});

export default LoadingReviews;
