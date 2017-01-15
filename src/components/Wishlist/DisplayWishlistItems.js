import React, {PropTypes} from 'react';
import {StyleSheet, css} from 'aphrodite';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';
import classNames from 'classNames';
import colors from '~/utils/colors';
import {Link} from 'react-router';

const DisplayWishlistItems = ({wishlist, selectProduct, fetchReviews, deleteWishlistItem}) => {

  const mapWishlistItems = !wishlist.isEmpty() ? wishlist.reverse().map(item => {
    return (
      <article key={item.get('itemId')} className={css(styles.wishlistItem)}>
        <div>
          <Avatar src={item.get('largeImage')} size={250} />
        </div>
        <div className={css(styles.prodInfo)}>
          <h2 className={css(styles.itemTitle)}>
            <Link className={css(styles.itemLink)} to={"/product/" + item.get('itemId')}
              onClick={() => { selectProduct(item.get('itemId')); fetchReviews(item.get('itemId')); }}>
              {item.get('name')}
            </Link>
          </h2>
          <p className={css(styles.price)}>${item.get('salePrice', item.get('msrp'))}</p>
          <RaisedButton
            label="DELETE"
            primary={true}
            className={css(styles.buttonStyle)}
            onClick={() => deleteWishlistItem(item.get('itemId'))}
            icon={<FontIcon
                  className={classNames("material-icons", css(styles.iconStyle))}
                  color={colors.primary1Color}>delete
                  </FontIcon>} />
          </div>
        </article>
      );
  }) : <h2 className={css(styles.noItems)}>No items in your wishlist.</h2>;
  return (
    <div className={css(styles.wishlistItemsWrap)}>
      {mapWishlistItems}
    </div>
  );
};

DisplayWishlistItems.propTypes = {
  wishlist: PropTypes.object,
  selectProduct: PropTypes.func,
  fetchReviews: PropTypes.func,
  deleteWishlistItem: PropTypes.func
};

const styles = StyleSheet.create({
  iconStyle: {
    fontSize: '30px',
    color: colors.white,
    marginRight: '5px'
  },
  buttonStyle: {
		marginTop: '15px'
	},
  wishlistItem: {
    padding: '35px 0',
    borderBottom: '1px solid #E0E0E0',
    display: 'flex'
  },
  itemTitle: {
    color: colors.primary1Color,
    fontSize: '1.5em'
  },
  prodInfo: {
    paddingLeft: '50px'
  },
  price: {
    fontSize: '1.3em',
    fontWeight: '400',
    color: colors.primary1Color
  },
  itemLink: {
    textDecoration: 'none',
    transition: 'all ease 400ms',
    color: colors.primary1Color,
    ':hover': {
      textDecoration: 'none',
      color: colors.accent1Color,
      transition: 'all ease 400ms'
    }
  },
  wishlistItemsWrap: {
    marginTop: '50px'
  },
  noItems: {
    textAlign: 'center',
    color: colors.primary1Color,
    fontSize: '1.8em',
    padding: '60px 0'
  }
});

export default DisplayWishlistItems;
