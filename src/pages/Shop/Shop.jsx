import React, { Component } from 'react';

import shopData from './shopData';
import PreviewCollection from '../../components/PrviewCollection/PreviewCollection';

class Shop extends Component {
  state = {
    collections: shopData
  };
  render() {
    const { collections } = this.state;
    return (
      <div className='shop-page'>
        {collections.map(({ id, ...otherCollectionProps }) => {
          return <PreviewCollection key={id} {...otherCollectionProps} />;
        })}
      </div>
    );
  }
}

export default Shop;
