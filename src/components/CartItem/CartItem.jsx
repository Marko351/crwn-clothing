import React from 'react';

import './CartItem.scss';
const CartItem = ({ item }) => {
  const { imageUrl, price, name, quantity } = item;
  return (
    <div className='cart-item'>
      <img src={imageUrl} alt='item' />
      <div className='item-details'>
        <div className='name'>{name}</div>
        <div className='price'>
          {quantity} X ${price}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
