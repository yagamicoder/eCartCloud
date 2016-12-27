import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { fromJS } from 'immutable';
import { ProductSearch, ProductResults, LoadingProducts } from '~/components/';
import { searchProducts, selectProduct } from '~/reducers/products';

export class ProductView extends Component {
  static propTypes = {
      searchProducts: PropTypes.func,
      selectProduct: PropTypes.func,
      prods: PropTypes.object,
      loading: PropTypes.bool,
      query: PropTypes.string,
      loadingProductsErr: PropTypes.bool
  };

    render() {
    const { searchProducts, prods, loading, query, selectProduct, loadingProductsErr } = this.props;
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
              selectProduct={selectProduct} />
          }            
        </div>
      </div>
    );
  }
}


const actions = {
    searchProducts,
    selectProduct
};

const mapStateToProps = (state) => {
    const products = fromJS(state).get('products');
    const prods = products.get('products', fromJS([]));
    const loading = products.get('loading', false);
    const query = products.get('query', '');
    const loadingProductsErr = products.get('loadingProductsErr', false);
    return {
        prods: prods,
        loading: loading,
        query: query,
        loadingProductsErr: loadingProductsErr
    };
};


export default connect(mapStateToProps, actions)(ProductView);
