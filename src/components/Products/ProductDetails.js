import React, {PropTypes} from 'react';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import colors from '~/utils/colors';
import classNames from 'classNames';
import { StyleSheet, css } from 'aphrodite';
import { unescape, round, range } from 'lodash';
import sanitize from 'sanitize-html';
import { ProductReviews } from '~/components';

//Handle star icons
const displayStars = (rating) => {
	const ratingArray = range(1, round(rating));
	return ratingArray.map(n => {
		return	(
			<FontIcon 
				key={n} className={classNames("material-icons", css(styles.starIcon))}
				color={colors.primary1Color}>star
			</FontIcon>
			);
	});
};

const ProductDetails = ({currentProduct}) => {
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
						label="ADD TO CART"
						secondary={true}
						className={css(styles.buttonStyle)}
						onClick={() => console.log('Added item ' + id + 'to the cart')}
						icon={<FontIcon 
									className={classNames("material-icons", css(styles.iconStyle))}
									color={colors.primary1Color}>shopping_cart
									</FontIcon>} />
					<RaisedButton
						label="WISHLIST"
						primary={true}
						style={{'marginLeft': '10px'}}
						className={css(styles.buttonStyle)}
						onClick={() => console.log('Added item ' + id + 'to the wishlist')}
						icon={<FontIcon 
									className={classNames("material-icons", css(styles.iconStyle))}
									color={colors.primary1Color}>favorite
									</FontIcon>} />			
				</div>
			</article>
			<div><p className={css(styles.desc)}>{sanitize(longDesc, {allowedTags: []})}</p></div>
			<ProductReviews />
		</div>
	);
};

const styles = StyleSheet.create({
	desc: {
		fontSize: '0.8em'
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
	currentProduct: PropTypes.object
};

export default ProductDetails;