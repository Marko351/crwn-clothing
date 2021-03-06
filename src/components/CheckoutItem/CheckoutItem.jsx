import React from 'react';
import { connect } from 'react-redux';

import {
  clearItemFromCart,
  removeItem,
  addItem
} from '../../redux/cart/cartActions';
import './CheckoutItem.scss';

const CheckoutItem = ({ item, clearItemFromCart, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = item;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => removeItem(item)}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addItem(item)}>
          &#10095;
        </div>
      </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={() => clearItemFromCart(item)}>
        &#10005;
      </div>
    </div>
  );
};

export default connect(
  null,
  { clearItemFromCart, removeItem, addItem }
)(CheckoutItem);
