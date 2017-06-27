import React, {PropTypes} from 'react';
import {StyleSheet, css} from 'aphrodite';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import classNames from 'classNames';
import colors from '~/utils/colors';
import {Link} from 'react-router';
import calcCartTotal from '~/utils/calcCartTotal';

const CartFooter = ({cart}) => {
  const display = cart.size > 1 ? cart.size + ' items' : cart.size + ' item';
  return (
    <div>
      <h3 className={css(styles.cartTotal)}>
        Cart subtotal: <span className={css(styles.total)}>${calcCartTotal(cart)}</span> ({cart.size === 0 ? '0 items' : display})
      </h3>
      <RaisedButton
        label="CONTINUE SHOPPING"
        primary={true}
        style={{float: 'left'}}
        containerElement={<Link to='/welcome' />}
        className={css(styles.buttonStyle)}
        icon={<FontIcon
              className={classNames("material-icons", css(styles.searchIcon))}
              color={colors.primary1Color}>search
              </FontIcon>} />
      <RaisedButton
        label="CHECKOUT"
        secondary={true}
        containerElement={cart.size === 0 ? <Link to='/cart' /> : <Link to='/checkout' />}
        style={{float: 'right'}}
        className={css(styles.buttonStyle)}
        disabled={cart.size === 0 ? true : false}
        icon={<FontIcon
              className={classNames("material-icons", css(styles.searchIcon))}
              color={colors.primary1Color}>shopping_cart
              </FontIcon>} />
    </div>
  );
};

CartFooter.propTypes = {
  cart: PropTypes.object
};

const styles = StyleSheet.create({
  searchIcon: {
    fontSize: '30px',
    color: colors.white,
    verticalAlign: 'middle',
    marginRight: '5px'
  },
  cartTotal: {
    color: colors.primary2Color,
    marginBottom: '35px',
    textAlign: 'right'
  },
  total: {
    color: colors.accent2Color
  }
});

export default CartFooter;
