import React, {PropTypes} from 'react';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import colors from '~/utils/colors';
import classNames from 'classNames';
import { StyleSheet, css } from 'aphrodite';
import { unescape } from 'lodash';
import sanitize from 'sanitize-html';
import { ProductReviews } from '~/components';
import displayStars from '~/utils/displayStars';
import { Link } from 'react-router';

const ProductDetails = ({currentProduct, addToCart, cart, addToWishlist, wishlist}) => {
	//Grab the properties that we want
	const id = currentProduct.get('itemId');
	const name = currentProduct.get('name');
	const image = currentProduct.get('largeImage');
	const salePrice = currentProduct.get('salePrice');
	const retailPrice = currentProduct.get('msrp');
	const longDesc = unescape(currentProduct.get('longDescription'), {'length': 250});
	const customerRating = currentProduct.get('customerRating');
	const brandName = currentProduct.get('brandName');
	const stock = currentProduct.get('stock');
	const productInCart = cart.filter(obj => {
		return id === obj.get('itemId');
	});
	const productInWishlist = wishlist.filter(obj => {
		return id === obj.get('itemId');
	});

	return (
		<div>
			<article className={css(styles.articleStyle)}>
				<div className={css(styles.articleCol)}>
					<Avatar src={image} size={300} style={{margin: '0 auto', display: 'block'}}/>
				</div>
				<div className={css(styles.articleCol)}>
					<h3 className={css(styles.productTitle)}>{name}</h3>
					Price:
					{retailPrice ? <span className={css(styles.retailPrice)}>${retailPrice}</span> : null}
					{retailPrice ?
							<span className={css(styles.salesPrice)}>${salePrice}</span>
						: <span className={css(styles.noSalesPrice)}>${salePrice}</span>
					}
					<p>Stock: {stock}</p>
					<p>Brand: {brandName}</p>
					<p>Rating: {displayStars(customerRating)}</p>
					<RaisedButton
						label={productInCart.size === 0 ? "ADD TO CART" : "ITEM IN CART"}
						secondary={true}
						className={css(styles.buttonStyle)}
						onClick={() => addToCart(currentProduct)}
						disabled={productInCart.size > 0 ? true : false}
						icon={<FontIcon
									className={classNames("material-icons", css(styles.iconStyle))}
									color={colors.primary1Color}>shopping_cart
									</FontIcon>} />
					<RaisedButton
						label={productInWishlist.size === 0 ? "WISHLIST" : "ITEM IN WISHLIST"}
						primary={true}
						style={{'marginLeft': '10px'}}
						className={css(styles.buttonStyle)}
						onClick={() => addToWishlist(currentProduct)}
						disabled={productInWishlist.size > 0 ? true : false}
						icon={<FontIcon
									className={classNames("material-icons", css(styles.iconStyle))}
									color={colors.primary1Color}>favorite
									</FontIcon>} />
					<p className={css(styles.continue)}>
						<FontIcon
              className={classNames("material-icons", css(styles.searchIcon))}
              color={colors.primary1Color}>search
            </FontIcon>
						<Link to='/welcome'>Continue Shopping</Link>
					</p>
				</div>
			</article>
			<div><p className={css(styles.desc)}>{sanitize(longDesc, {allowedTags: []})}</p></div>
			<ProductReviews />
		</div>
	);
};

const styles = StyleSheet.create({
	searchIcon: {
    fontSize: '30px',
    color: colors.primary2Color,
    verticalAlign: 'middle',
    marginRight: '5px'
  },
	continue: {
		marginTop: '35px',
		fontSize: '1.3em'
	},
	desc: {
		fontSize: '1.1em',
		padding: '15px 0',
		lineHeight: '1.5em'
	},
	iconStyle: {
		color: '#fff'
	},
	starIcon: {
		color: colors.accent1Color,
		verticalAlign: 'middle'
	},
	buttonStyle: {
		marginTop: '15px'
	},
	articleStyle: {
		display: 'flex',
		padding: '25px 0',
		borderBottom: '1px solid #E0E0E0'
	},
	articleCol: {
		flex: '2'
	},
	retailPrice: {
		color: colors.primary1Color,
		textDecoration: 'line-through',
		padding: '0 4px'
	},
	salesPrice: {
		color: colors.accent1Color,
		padding: '0 4px'
	},
	noSalesPrice: {
		color: colors.primary1Color,
		padding: '0 4px'
	},
	productTitle: {
		color: colors.primary1Color,
		fontWeight: 'normal'
	}
});

ProductDetails.propTypes = {
	currentProduct: PropTypes.object,
	addToWishlist: PropTypes.func,
	wishlist: PropTypes.object,
	addToCart: PropTypes.func,
	cart: PropTypes.object
};

export default ProductDetails;
