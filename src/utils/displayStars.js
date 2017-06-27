import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import colors from '~/utils/colors';
import classNames from 'classNames';
import { StyleSheet, css } from 'aphrodite';
import { round, range } from 'lodash';

//Handle star icons
const displayStars = (rating) => {
	const ratingArray = range(0, round(rating));
	return ratingArray.map(n => {
		return	(
			<FontIcon 
				key={n} className={classNames("material-icons", css(styles.starIcon))}
				color={colors.primary1Color}>star
			</FontIcon>
			);
	});
};

const styles = StyleSheet.create({
	starIcon: {
		color: colors.accent1Color,
		verticalAlign: 'middle'
	}
});

export default displayStars;