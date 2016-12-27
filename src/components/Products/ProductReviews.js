import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { fromJS } from 'immutable';
import { DisplayReviews, AddReview } from '~/components/';
import { searchProducts, selectProduct } from '~/reducers/products';
import FontIcon from 'material-ui/FontIcon';
import colors from '~/utils/colors';
import classNames from 'classNames';
import { StyleSheet, css } from 'aphrodite';

export class ProductReviews extends Component {
  static propTypes = {
      
  };

    render() {
    return (
      <div className={css(styles.reviewsWrap)}>
        <h3 className={css(styles.reviewTitle)}>Reviews
          <FontIcon 
            className={classNames("material-icons", css(styles.rateIcon))}
            color={colors.primary1Color}>rate_review
          </FontIcon>
        </h3>
        <AddReview />
        <DisplayReviews />
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
    selectProduct
};

const mapStateToProps = (state) => {
    const products = fromJS(state).get('products');
    
    return {
        
    };
};


export default connect(mapStateToProps, actions)(ProductReviews);
