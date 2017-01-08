import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { fromJS } from 'immutable';
import {Container, Row} from 'react-grid-system';
import {StyleSheet, css} from 'aphrodite';
import { selectProduct } from '~/reducers/products';
import { fetchReviews } from '~/reducers/reviews';
import { deleteCartItem } from '~/reducers/cart';
import colors from '~/utils/colors';
import FontIcon from 'material-ui/FontIcon';
import classNames from 'classNames';
import { DisplayCartItems, CartFooter } from '~/components/Cart';

export class CartView extends Component {
  static propTypes = {
    cart: PropTypes.object,
    selectProduct: PropTypes.func,
    fetchReviews: PropTypes.func,
    deleteCartItem: PropTypes.func,
    firstName: PropTypes.string
  };

  render() {
    const { cart, selectProduct, fetchReviews, deleteCartItem, firstName } = this.props;

    return (
      <div className={css(styles.outerWrap)}>
        <div className={css(styles.wrapper)}>
          <h1 className={css(styles.heading)}>
            Shopping Cart
            <FontIcon
              className={classNames("material-icons", css(styles.iconStyle))}
              color={colors.primary1Color}>shopping_cart
              </FontIcon>
            </h1>
          <p className={css(styles.intro)}>{firstName}, here is your shopping cart.</p>
          <DisplayCartItems
            cart={cart}
            selectProduct={selectProduct}
            fetchReviews={fetchReviews}
            deleteCartItem={deleteCartItem} />
          <CartFooter cart={cart} />
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  intro: {
    color: colors.primary1Color,
    textAlign: 'center',
    fontSize: '1.5em',
  },
  heading: {
    textAlign: 'center',
    fontSize: '2em',
    color: colors.primary2Color
  },
  iconStyle: {
    margin: '0 15px',
    verticalAlign: 'middle'
  }
});

const actions = {
  selectProduct,
  fetchReviews,
  deleteCartItem
};

const mapStateToProps = (state) => {
  const cart = fromJS(state).getIn(['cart', 'entities'], fromJS([]));
  const user = fromJS(state).getIn(['user', 'entities'], fromJS([]));
  const firstName = user.get('first_name');
  return {
    cart: cart,
    firstName: firstName
  };
};


export default connect(mapStateToProps, actions)(CartView);
