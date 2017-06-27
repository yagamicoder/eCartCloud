import React, {PropTypes} from 'react';
import TextField from 'material-ui/TextField';
import { debounce } from 'lodash';
/* 
	Need to wait a few seconds (debounce) and then make API call. 
	This is too prevent too many API calls at one time.
*/
const handleSearchProducts = debounce((searchProducts, query) => {
		searchProducts(query);
}, 1500);

const ProductSearch = ({searchProducts}) => {
  return (
		<div>
			<TextField
				hintText="Search for products"
				floatingLabelText="Search for products"
				fullWidth={true} 
				onChange={({target}) => handleSearchProducts(searchProducts, target.value)}/>
		</div>
  );
};

ProductSearch.propTypes = {
	searchProducts: PropTypes.func
};

export default ProductSearch;

