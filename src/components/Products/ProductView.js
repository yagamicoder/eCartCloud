import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { fromJS } from 'immutable';
import { ProductSearch, ProductResults, LoadingProducts } from '~/components/';
import { searchProducts } from '~/reducers/products';

export class ProductView extends Component {
    static propTypes = {
        searchProducts: PropTypes.func,
        prods: PropTypes.object,
        loading: PropTypes.bool,
        query: PropTypes.string
    };

    render() {
        const { searchProducts, prods, loading, query } = this.props;
        return (
            <div>
              <div>
                <ProductSearch searchProducts={searchProducts} />
                {loading ? <LoadingProducts /> : <ProductResults products={prods} query={query} />}            
              </div>
            </div>
        );
    }
}


const actions = {
    searchProducts
};

const mapStateToProps = (state) => {
    const products = fromJS(state).get('products');
    const prods = products.get('products', fromJS([]));
    const loading = products.get('loading', false);
    const query = products.get('query', '');
    return {
        prods: prods,
        loading: loading,
        query: query
    };
};


export default connect(mapStateToProps, actions)(ProductView);
