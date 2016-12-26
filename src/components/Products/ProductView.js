import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { fromJS } from 'immutable';
import { ProductSearch, ProductResults } from '~/components/';
import { searchProducts } from '~/reducers/products';

export class ProductView extends Component {
    static propTypes = {
        searchProducts: PropTypes.func,
        prods: PropTypes.object
    };

    render() {
        const { searchProducts, prods } = this.props;
        return (
            <div>
              <div>
                <ProductSearch searchProducts={searchProducts} />
                <ProductResults products={prods} />
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
    return {
        prods: prods
    };
};


export default connect(mapStateToProps, actions)(ProductView);
