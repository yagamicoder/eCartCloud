import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import Paper from 'material-ui/Paper';
import colors from '~/utils/colors';
import classNames from 'classNames';
import { StyleSheet, css } from 'aphrodite';

const DisplayReviews = ({reviews}) => {
	return (
		<div>
			<Paper className={css(styles.reviewWrap)} style={{backgroundColor: '#F5F5F5'}} zDepth={2}>
				<p className={css(styles.date)}>12/27/2016</p>
				<h3 className={css(styles.reviewTitle)}>Should I buy?</h3>
				<p>Posted by: Michael Smith</p>
				<span>Rating:
         <FontIcon 
          className={classNames("material-icons", css(styles.rateIcon))}
          color={colors.accent1Color}>star
         </FontIcon>
       	</span>
				<p>My review of this awesome product blah blah blah blah</p>
				<p>Helpful?</p>
				<span>
					<FontIcon 
          	className={classNames("material-icons", css(styles.rateIcon))}
          	color={colors.primary1Color}>thumb_up
         	</FontIcon>(7)
         </span>
         <span>
	         <FontIcon 
	          className={classNames("material-icons", css(styles.rateIcon))}
	          color={colors.primary1Color}>thumb_down
	         </FontIcon>(12)
         </span>
			</Paper>
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
  }
});


export default DisplayReviews;