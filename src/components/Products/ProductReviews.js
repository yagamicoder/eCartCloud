import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { fromJS } from 'immutable';
import { DisplayReviews, AddReview } from '~/components/';
import { searchProducts, selectProduct } from '~/reducers/products';
import { setFormData, addReview } from  '~/reducers/reviews';
import FontIcon from 'material-ui/FontIcon';
import colors from '~/utils/colors';
import classNames from 'classNames';
import { StyleSheet, css } from 'aphrodite';

export class ProductReviews extends Component {
  static propTypes = {
      reviews: PropTypes.object,
      setFormData: PropTypes.func,
      formData: PropTypes.object,
      addReview: PropTypes.func
  };

  render() {
    const { reviews, setFormData, formData, addReview } = this.props;
      return (
        <div className={css(styles.reviewsWrap)}>
          <h3 className={css(styles.reviewTitle)}>Reviews
            <FontIcon 
              className={classNames("material-icons", css(styles.rateIcon))}
              color={colors.primary1Color}>rate_review
            </FontIcon>
          </h3>
          <AddReview formData={formData} setFormData={setFormData} addReview={addReview} />
          <DisplayReviews reviews={reviews} />
        </div>
      );
    }
  }

const styles = StyleSheet.create({
  desc: {
    fontSize: '0.8em'
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
  reviewsWrap: {
    padding: '25px 0'
  }
});


const actions = {
    searchProducts,
    selectProduct,
    setFormData,
    addReview
};

const mapStateToProps = (state) => {
  const reviews = fromJS(state).get('reviews');
  const formData = reviews.get('formData', fromJS({})); 
  return {
      reviews: reviews.get('entities', fromJS({})),
      formData: formData
  };
};


export default connect(mapStateToProps, actions)(ProductReviews);
