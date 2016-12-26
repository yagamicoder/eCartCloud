import React, {PropTypes} from 'react';
import TextField from 'material-ui/TextField';

const ProductSearch = ({searchProducts, query}) => {
    return (
			<div>
				<TextField
					hintText="Search for products"
					floatingLabelText="Search for products"
					fullWidth={true}
					value={query} 
					onChange={({target}) => searchProducts(target.value)} />
			</div>
    );
};

ProductSearch.propTypes = {
	searchProducts: PropTypes.func
};

export default ProductSearch;

