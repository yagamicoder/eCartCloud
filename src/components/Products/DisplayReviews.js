import React, {PropTypes} from 'react';
import FontIcon from 'material-ui/FontIcon';
import Paper from 'material-ui/Paper';
import colors from '~/utils/colors';
import classNames from 'classNames';
import { StyleSheet, css } from 'aphrodite';
import moment from 'moment';
import {fromJS} from 'immutable';
import displayStars from '~/utils/displayStars';

const DisplayReviews = ({reviews}) => {
	const mappedReviews = reviews.get('reviews', fromJS([])).reverse().map(review => {
		const date = moment(review.get('submissionTime')).format('MM/DD/YYYY');
		return (
			<Paper key={review.get('title')} 
				className={css(styles.reviewWrap)} style={{backgroundColor: '#F5F5F5'}} zDepth={2}>
				<p className={css(styles.date)}>{date}</p>
				<h3 className={css(styles.reviewTitle)}>{review.get('title')}</h3>
				<p>Posted by: {review.get('reviewer')}</p>
				<span>Rating: {displayStars(review.getIn(['overallRating', 'rating']))}</span>
				<p>{review.get('reviewText')}</p>
			</Paper>
		);
	});

	return (
		<div>{mappedReviews}</div>
	);
};

const styles = StyleSheet.create({
  desc: {
    fontSize: '0.8em'
  },
  date: {
  	textAlign: 'right'
  },
  rateIcon: {
    verticalAlign: 'middle',
    margin: '0 15px',
    fontSize: '1.5em',
    cursor: 'pointer'
  },
  reviewTitle: {
    color: colors.primary1Color,
    fontWeight: 'normal',
    fontSize: '1.5em'
  },
  reviewWrap: {
    padding: '15px 20px',
    marginBottom: '15px'
  }
});

DisplayReviews.propTypes = {
	reviews: PropTypes.object
};

export default DisplayReviews;