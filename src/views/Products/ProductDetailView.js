import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { fromJS } from 'immutable';
import {Container, Row} from 'react-grid-system';
import {StyleSheet, css} from 'aphrodite';
import { ProductDetails } from '~/components';

export class ProductDetailView extends Component {
  static propTypes = {
    currentProduct: PropTypes.object,
  };
  render() {
    const { currentProduct } = this.props;
    return (
      <div className={css(styles.outerWrap)}>
        <Container>
          <Row>
            <div className={css(styles.wrapper)}>
              <ProductDetails currentProduct={currentProduct} />
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
};

const mapStateToProps = (state) => {
  const products = fromJS(state).get('products');
  const currentProduct = products.get('currentProduct', fromJS({}));
  return {
    currentProduct: currentProduct
  };
};


export default connect(mapStateToProps, actions)(ProductDetailView);
