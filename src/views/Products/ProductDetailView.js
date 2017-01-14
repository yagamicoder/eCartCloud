import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { fromJS } from 'immutable';
import {StyleSheet, css} from 'aphrodite';
import { ProductDetails, LoadingProductDetails } from '~/components';
import { addToCart } from '~/reducers/cart';
import { addToWishlist } from '~/reducers/wishlist';

export class ProductDetailView extends Component {
  static propTypes = {
    currentProduct: PropTypes.object,
    error: PropTypes.bool,
    loading: PropTypes.bool,
    addToWishlist: PropTypes.func,
    wishlist: PropTypes.object,
    addToCart: PropTypes.func,
    cart: PropTypes.object
  };
  render() {
    const { currentProduct, error, loading, addToCart, cart, addToWishlist, wishlist } = this.props;
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
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
});

const actions = {
  addToCart,
  addToWishlist
};

const mapStateToProps = (state) => {
  const products = fromJS(state).get('products');
  const currentProduct = products.get('currentProduct', fromJS({}));
  const productDetailError = products.get('productDetailError', false);
  const loadingProductDetail = products.get('loadingProductDetail', false);
  const cart = fromJS(state).getIn(['cart', 'entities'], fromJS({}));
  const wishlist = fromJS(state).getIn(['wishlist', 'entities'], fromJS({}));
  return {
    currentProduct: currentProduct,
    error: productDetailError,
    loading: loadingProductDetail,
    cart: cart,
    wishlist: wishlist
  };
};


export default connect(mapStateToProps, actions)(ProductDetailView);
