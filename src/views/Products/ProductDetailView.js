import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { fromJS } from 'immutable';
import {Container, Row} from 'react-grid-system';
import {StyleSheet, css} from 'aphrodite';
import { ProductDetails, LoadingProductDetails } from '~/components';
import { addToCart } from '~/reducers/cart';

export class ProductDetailView extends Component {
  static propTypes = {
    currentProduct: PropTypes.object,
    error: PropTypes.bool,
    loading: PropTypes.bool,
    addToCart: PropTypes.func,
    cart: PropTypes.object
  };
  render() {
    const { currentProduct, error, loading, addToCart, cart } = this.props;
    return (
      <div className={css(styles.outerWrap)}>
        <Container>
          <Row>
            <div className={css(styles.wrapper)}>
            {loading || error ?
              <LoadingProductDetails error={error} loading={loading} /> :
              <ProductDetails currentProduct={currentProduct} addToCart={addToCart} cart={cart} />  
            }
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    paddingLeft: '210px'
  },
  outerWrap: {
    paddingBottom: '80px'
  }
});

const actions = {
  addToCart
};

const mapStateToProps = (state) => {
  const products = fromJS(state).get('products');
  const currentProduct = products.get('currentProduct', fromJS({}));
  const productDetailError = products.get('productDetailError', false);
  const loadingProductDetail = products.get('loadingProductDetail', false);
  const cart = fromJS(state).getIn(['cart', 'entities'], fromJS({}));
  return {
    currentProduct: currentProduct,
    error: productDetailError,
    loading: loadingProductDetail,
    cart: cart
  };
};


export default connect(mapStateToProps, actions)(ProductDetailView);
