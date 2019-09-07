import React from 'react';
import { connect } from 'react-redux';

import { selectCollections } from '../../redux/shop/shopSelectors';

import CollectionItem from '../../components/CollectionItem/CollectionItem';

import './Collection.scss';

const CollectionPage = ({ match, collections }) => {
  if (collections[match.params.collectionId]) {
    const { title, items, id } = collections[match.params.collectionId];
    return (
      <div key={id} className='collection-page'>
        <h2 className='title'>{title}</h2>
        <div className='items'>
          {items.map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  collections: selectCollections(state)
});
export default connect(mapStateToProps)(CollectionPage);
