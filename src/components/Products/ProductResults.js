import React, {PropTypes} from 'react';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import colors from '~/utils/colors';
import classNames from 'classNames';
import { StyleSheet, css } from 'aphrodite';
import { Link } from 'react-router';
import { truncate, isEmpty } from 'lodash';
import { NoProductsView } from '~/components';

const ProductResults = ({products, query, selectProduct}) => {
	//Iterate through all of the results
	const mappedProducts = !isEmpty(query) ? products.map(product => {
		//Grab the properties that we want
		const id = product.get('itemId');
		const name = product.get('name');
		const image = product.get('largeImage');
		const salePrice = product.get('salePrice');
		const retailPrice = product.get('msrp');
		const shortDesc = truncate(product.get('shortDescription'), {'length': 250});

		return (
			<article className={css(styles.articleStyle)} key={id}>
				<div className={css(styles.articleCol)}>
					<Avatar src={image} size={200} style={{margin: '0 auto', display: 'block'}}/>
				</div>
				<div className={css(styles.articleCol)}>
					<h3 className={css(styles.productTitle)}>{name}</h3>
					Price:
					{retailPrice ? <span className={css(styles.retailPrice)}>${retailPrice}</span> : null}
					{retailPrice ? 
						<span className={css(styles.salesPrice)}>${salePrice}</span>
						: <span className={css(styles.noSalesPrice)}>${salePrice}</span>
					}
					<p>{shortDesc}</p>
					<RaisedButton
						label="VIEW PRODUCT"
						primary={true}
						className={css(styles.buttonStyle)}
						containerElement={<Link to={'/product/' + id} />}
						onClick={() => selectProduct(id)}
						icon={
								<FontIcon className={classNames("material-icons", css(styles.iconStyle))}
								color={colors.primary1Color}>keyboard_arrow_right</FontIcon>} />
				</div>
			</article>
			);
	}) : <NoProductsView />;
	return (
		<div>	
			{mappedProducts}
		</div>
	);
};

const styles = StyleSheet.create({
	iconStyle: {
		color: '#fff'
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

ProductResults.propTypes = {
	products: PropTypes.object,
	query: PropTypes.string,
	selectProduct: PropTypes.func
};

export default ProductResults;