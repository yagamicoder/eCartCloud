import React from 'react';
import TextField from 'material-ui/TextField';

const ProductSearch = ({}) => {
  return (
  	<div>
  	 <TextField
      hintText="Search for products"
      floatingLabelText="Search for products"
      fullWidth={true} 
      onChange={({target}) => console.log(target.value)} />
  	</div>
  );
};

export default ProductSearch;
