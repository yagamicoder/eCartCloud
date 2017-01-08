import {round} from 'lodash';

const calcCartTotal = (cart) => {
  let subtotal = 0;
  const tax = 0.075;
  cart.map(item => {
      const price = parseFloat(item.get('salePrice', item.get('msrp')));
      subtotal = subtotal + price;
  });
  const total = subtotal * tax;
  const finalTotal = total + subtotal;
  return round(finalTotal, 2).toLocaleString();
};

export default calcCartTotal;
