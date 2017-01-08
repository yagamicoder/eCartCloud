import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { fromJS } from 'immutable';
import {Container, Row} from 'react-grid-system';
import {StyleSheet, css} from 'aphrodite';
import {List, ListItem} from 'material-ui/List';
import FontIcon from 'material-ui/FontIcon';
import classNames from 'classNames';
import colors from '~/utils/colors';

export class CartView extends Component {
  static propTypes = {
    cart: PropTypes.object
  };
  render() {
    const { cart } = this.props;
    const cartArr = fromJS([cart]);

    const cartItems = [];
    cartArr.map(item => {
      const cartItem = item.toJS();
      for(const key in cartItem) {
        cartItems.push(cartItem[key]);
      }
    });

    const mapCartItems = cartItems.map(item => {
      return (
        <ListItem key={item.itemId}>
          {item.name}
          <FontIcon className={classNames("material-icons", css(styles.logoStyle))}
              color={colors.white}>close</FontIcon>
        </ListItem>
      );
    });

    return (
      <div className={css(styles.outerWrap)}>
        <Container>
          <Row>
            <div className={css(styles.wrapper)}>
              <h1>Cart total: $14.90</h1>
              <List>
                sdfsd
              </List>
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
  },
  logoStyle: {
    fontSize: '30px',
    color: colors.primary1Color,
    verticalAlign: 'middle',
    marginRight: '5px'
  }
});

const actions = {
};

const mapStateToProps = (state) => {
  const cart = fromJS(state).getIn(['cart', 'entities'], fromJS({}));
  return {
    cart: cart
  };
};


export default connect(mapStateToProps, actions)(CartView);
