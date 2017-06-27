import React, {PropTypes} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import colors from '~/utils/colors';
import { StyleSheet, css } from 'aphrodite';
import serialize from 'form-serialize';
import { merge, isEmpty } from 'lodash';

const validate = (formData) => {
	const rating = formData.get('rating', '1');
	const reviewText = formData.get('reviewText', '');
	const title = formData.get('title', '');
	if(!isEmpty(title) && !isEmpty(reviewText) && !isEmpty(rating)) {
		return false;
	} else {
		return true;
	}
};

const AddReview = ({setFormData, formData, addReview}) => {
	return (
		<div className={css(styles.addReviewWrap)}>
			<p className={css(styles.desc)}>Add a review</p>
			<form id="addReviewForm" action="javascript:void(0);">
				<TextField
					floatingLabelText="Title" fullWidth={true} name="title"
					value={formData.get('title', '')}
					onChange={() => {
						const form = document.querySelector('#addReviewForm');
						setFormData(serialize(form, {hash: true}));
					}}
				/>
    		<TextField floatingLabelText="Type your review here..."
					fullWidth={true} multiLine={true} name="reviewText"
					value={formData.get('reviewText', '')}
					onChange={() => {
						const form = document.querySelector('#addReviewForm');
						setFormData(serialize(form, {hash: true}));
					}}
				/>
    		<p>Rating</p>
    		<RadioButtonGroup name="rating" defaultSelected="1" valueSelected={formData.get('rating', '1')}
    			onChange={(event, value) => {
    				const form = document.querySelector('#addReviewForm');
    				const rating = {"rating": value};
    				setFormData(merge(serialize(form, {hash: true}), rating));
    			}}>
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
    		<RaisedButton disabled={validate(formData)}
    			label="Submit" secondary={true} className={css(styles.submitBtn)}
    			onClick={() => addReview(formData)} />
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
};

AddReview.propTypes = {
	setFormData: PropTypes.func,
  formData: PropTypes.object,
	addReview: PropTypes.func
};

export default AddReview;
