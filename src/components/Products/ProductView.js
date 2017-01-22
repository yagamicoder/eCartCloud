import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { fromJS } from 'immutable';
import { ProductSearch, ProductResults, LoadingProducts } from '~/components/';
import { searchProducts, selectProduct } from '~/reducers/products';
import { fetchReviews } from '~/reducers/reviews';
import { addToCart, openCartNotification } from '~/reducers/cart';
import { NotificationMessage } from '~/shared';

export class ProductView extends Component {
  static propTypes = {
      searchProducts: PropTypes.func,
      selectProduct: PropTypes.func,
      prods: PropTypes.object,
      loading: PropTypes.bool,
      query: PropTypes.string,
      loadingProductsErr: PropTypes.bool,
      fetchReviews: PropTypes.func,
      cart: PropTypes.object,
      addToCart: PropTypes.func,
      openCartNotification: PropTypes.func,
      showCartMsg: PropTypes.bool
  };

    render() {
    const {
      searchProducts,
      prods,
      loading,
      query,
      selectProduct,
      loadingProductsErr,
      fetchReviews,
      openCartNotification,
      showCartMsg,
      cart,
      addToCart } = this.props;
    const cartName = !cart.isEmpty() ? cart.last().get('name') : 'Item';
    return (
      <div>
        <div>
          <ProductSearch searchProducts={searchProducts} />
          {loading ?
            <LoadingProducts /> :
            <ProductResults
              products={prods}
              query={query}
              error={loadingProductsErr}
              fetchReviews={fetchReviews}
              selectProduct={selectProduct}
              cart={cart}
              addToCart={addToCart} />
          }
        </div>
        <NotificationMessage
          show={showCartMsg}
          message={cartName + ' was added to the cart.'}
          handleNotificationMsg={openCartNotification}
          />
      </div>
    );
  }
}


const actions = {
    searchProducts,
    selectProduct,
    fetchReviews,
    addToCart,
    openCartNotification
};

const mapStateToProps = (state) => {
    const products = fromJS(state).get('products');
    const cart = fromJS(state).getIn(['cart', 'entities']);
    const prods = products.get('products', fromJS([]));
    const loading = products.get('loading', false);
    const query = products.get('query', '');
    const loadingProductsErr = products.get('loadingProductsErr', false);
    const showCartMsg = fromJS(state).getIn(['cart', 'showCartMsg'], false);

    return {
        prods: prods,
        loading: loading,
        query: query,
        loadingProductsErr: loadingProductsErr,
        cart: cart,
        showCartMsg: showCartMsg
    };
};


export default connect(mapStateToProps, actions)(ProductView);
