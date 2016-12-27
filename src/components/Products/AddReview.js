import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import FontIcon from 'material-ui/FontIcon';
import colors from '~/utils/colors';
import classNames from 'classNames';
import { StyleSheet, css } from 'aphrodite';

const AddReview = () => {
	return (
		<div className={css(styles.addReviewWrap)}>
			<p className={css(styles.desc)}>Add a review</p>
			<form id="addReviewForm">
				<TextField
		      floatingLabelText="Title"
    		/>
    		<TextField
		      floatingLabelText="Type your review here..."
		      multiLine={true}
		      fullWidth={true}
    		/>
    		<p>Rating</p>
    		<RadioButtonGroup name="reviewStars" defaultSelected="not_light">
		      <RadioButton
		        value="1"
		        label="1"
		        style={radioStyle}
		        />
      		<RadioButton
	        	value="2"
	        	label="2"
	        	style={radioStyle}
	        	/>
        	<RadioButton
        	value="3"
        	label="3"
        	style={radioStyle}
        	/>
        	<RadioButton
        	value="4"
        	label="4"
        	style={radioStyle}
        	/>
        	<RadioButton
        	value="5"
        	label="5"
        	style={radioStyle}
        	/>
    		</RadioButtonGroup>
    		<RaisedButton label="Submit" secondary={true} className={css(styles.submitBtn)} />
			</form>
		</div>
	);
};

const styles = StyleSheet.create({
  desc: {
    fontSize: '1.2em',
    color: colors.primary1Color
  },
  rateIcon: {
    verticalAlign: 'middle',
    margin: '0 15px',
    fontSize: '1.5em'
  },
  reviewTitle: {
    color: colors.primary1Color,
    fontWeight: 'normal',
    textAlign: 'center',
    fontSize: '2em'
  },
  addReviewWrap: {
    padding: '25px 0'
  },
  submitBtn: {
  	margin: '15px 0'
  }
});

const radioStyle = {
	display: 'inline-block',
	width: 'auto',
	margin: '0 7px'
}

export default AddReview;