import moment from 'moment';
import {fromJS} from 'immutable';
//Build the review object to be merged with the current reviews
const buildReviewObj = (user, product, formData) => {
	const name = product.get('name');
	const reviewer = user.get('full_name');
	const submissionTime = moment().format();
	const title = formData.get('title');
	const rating = formData.get('rating');
	const reviewText = formData.get('reviewText');
	//Final object
	const reviewObj = {
	 "name": name,
      "overallRating": {
        "label": "Overall",
        "rating": rating
      },
      "reviewer": reviewer,
      "reviewText": reviewText,
      "submissionTime": submissionTime,
      "title": title
	};
	return fromJS(reviewObj);
};

export default buildReviewObj;