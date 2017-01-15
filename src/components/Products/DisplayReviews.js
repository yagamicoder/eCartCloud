import React, {PropTypes} from 'react';
import Paper from 'material-ui/Paper';
import colors from '~/utils/colors';
import { StyleSheet, css } from 'aphrodite';
import moment from 'moment';
import {fromJS} from 'immutable';
import displayStars from '~/utils/displayStars';
import classNames from 'classNames';
import FontIcon from 'material-ui/FontIcon';

const Error = () => {
  return (
    <article className={css(styles.errorStyle)}>
      <h3 className={css(styles.errorMessage)}>Error fetching reviews. Please trying again later.</h3>
      <div>
        <FontIcon className={classNames("material-icons", css(styles.errorIcon))}
          color={colors.primary1Color}>error</FontIcon>
      </div>
    </article>
  );
};

const DisplayReviews = ({reviews, reviewError}) => {
	const mappedReviews = reviews.get('reviews', fromJS([])).reverse().map((review, i) => {
		const date = moment(review.get('submissionTime')).format('MM/DD/YYYY');
		return (
			<Paper key={i}
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
		<div>
      {reviewError ? <Error /> : mappedReviews}
    </div>
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
  },
  errorIcon: {
    textAlign: 'center',
    fontSize: '6em'
  },
  errorStyle: {
    padding: '25px 0',
    textAlign: 'center'
  },
  errorMessage: {
    color: colors.primary1Color,
    fontWeight: 'normal',
    textAlign: 'center'
  }
});

DisplayReviews.propTypes = {
	reviews: PropTypes.object,
  reviewError: PropTypes.bool
};

export default DisplayReviews;
