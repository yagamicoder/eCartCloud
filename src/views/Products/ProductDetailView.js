import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { fromJS } from 'immutable';
import {StyleSheet, css} from 'aphrodite';
import { ProductDetails, LoadingProductDetails } from '~/components';
import { addToCart, openCartNotification } from '~/reducers/cart';
import { addToWishlist } from '~/reducers/wishlist';
import { addToHistory } from '~/reducers/history';
import moment from 'moment';
import { isEqual } from 'lodash';
import { NotificationMessage } from '~/shared';

export class ProductDetailView extends Component {
  static propTypes = {
    currentProduct: PropTypes.object,
    error: PropTypes.bool,
    loading: PropTypes.bool,
    addToWishlist: PropTypes.func,
    wishlist: PropTypes.object,
    addToCart: PropTypes.func,
    cart: PropTypes.object,
    addToHistory: PropTypes.func,
    history: PropTypes.object,
    showCartMsg: PropTypes.bool,
    openCartNotification: PropTypes.func
  };

  componentWillReceiveProps (nextProps) {
    const { addToHistory, currentProduct, history } = this.props;
    const timeStamp = moment().format('MM/DD/YYYY');
    const dateObj = {'dateViewed': timeStamp};
    const id = nextProps.currentProduct.get('itemId');
    if(!isEqual(currentProduct.toJS(), nextProps.currentProduct.toJS())) {
      const inHistory = history.find((item) => {
        return item.get('itemId') === id;
      });
      //Only place item in the history if doesn't exist in the history
      inHistory ? null : addToHistory(nextProps.currentProduct.merge(dateObj));
    }
  }

  render() {
    const { currentProduct, error, loading, addToCart, cart, addToWishlist, wishlist, showCartMsg, openCartNotification } = this.props;

    return (
      <div>
        <div className={css(styles.wrapper)}>
        {loading || error ?
          <LoadingProductDetails error={error} loading={loading} /> :
          <ProductDetails
            currentProduct={currentProduct}
            addToWishlist={addToWishlist}
            wishlist={wishlist}
            addToCart={addToCart}
            cart={cart} />
        }
        <NotificationMessage
          show={showCartMsg}
          message={currentProduct.get('name') + ' added to the cart.'}
          handleNotificationMsg={openCartNotification}
          />
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
});

const actions = {
  addToCart,
  addToWishlist,
  addToHistory,
  openCartNotification
};

const mapStateToProps = (state) => {
  const products = fromJS(state).get('products');
  const currentProduct = products.get('currentProduct', fromJS({}));
  const productDetailError = products.get('productDetailError', false);
  const loadingProductDetail = products.get('loadingProductDetail', false);
  const cart = fromJS(state).getIn(['cart', 'entities'], fromJS({}));
  const wishlist = fromJS(state).getIn(['wishlist', 'entities'], fromJS({}));
  const history = fromJS(state).getIn(['history', 'entities'], fromJS({}));
  const showCartMsg = fromJS(state).getIn(['cart', 'showCartMsg'], false);
  return {
    currentProduct: currentProduct,
    error: productDetailError,
    loading: loadingProductDetail,
    cart: cart,
    wishlist: wishlist,
    history: history,
    showCartMsg: showCartMsg
  };
};


export default connect(mapStateToProps, actions)(ProductDetailView);
