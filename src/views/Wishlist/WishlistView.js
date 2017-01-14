import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { fromJS } from 'immutable';
import {StyleSheet, css} from 'aphrodite';
import { selectProduct } from '~/reducers/products';
import { fetchReviews } from '~/reducers/reviews';
import { deleteWishlistItem } from '~/reducers/wishlist';
import colors from '~/utils/colors';
import FontIcon from 'material-ui/FontIcon';
import classNames from 'classNames';
import { DisplayWishlistItems, WishlistFooter } from '~/components/Wishlist';

export class WishlistView extends Component {
  static propTypes = {
    wishlist: PropTypes.object,
    selectProduct: PropTypes.func,
    fetchReviews: PropTypes.func,
    deleteWishlistItem: PropTypes.func,
    firstName: PropTypes.string
  };

  render() {
    const { wishlist, selectProduct, fetchReviews, deleteWishlistItem, firstName } = this.props;

    return (
      <div className={css(styles.outerWrap)}>
        <div className={css(styles.wrapper)}>
          <h1 className={css(styles.heading)}>
            Wishlist
            <FontIcon
              className={classNames("material-icons", css(styles.iconStyle))}
              color={colors.primary1Color}>favorite
              </FontIcon>
            </h1>
          <p className={css(styles.intro)}>{firstName}, here is your wishlist.</p>
          <DisplayWishlistItems
            wishlist={wishlist}
            selectProduct={selectProduct}
            fetchReviews={fetchReviews}
            deleteWishlistItem={deleteWishlistItem} />
          <WishlistFooter />
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
  deleteWishlistItem
};

const mapStateToProps = (state) => {
  const wishlist = fromJS(state).getIn(['wishlist', 'entities'], fromJS([]));
  const user = fromJS(state).getIn(['user', 'entities'], fromJS([]));
  const firstName = user.get('first_name');
  return {
    wishlist: wishlist,
    firstName: firstName
  };
};


export default connect(mapStateToProps, actions)(WishlistView);
