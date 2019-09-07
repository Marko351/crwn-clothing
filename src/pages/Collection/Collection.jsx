import React from 'react';
import { connect } from 'react-redux';

import { selectCollections } from '../../redux/shop/shopSelectors';

import CollectionItem from '../../components/CollectionItem/CollectionItem';

import './Collection.scss';

const CollectionPage = ({ match, collections }) => {
  console.log(collections);
  return (
    <div className='category'>
      <h2>Collection Page</h2>
    </div>
  );
};

const mapStateToProps = state => ({
  collections: selectCollections(state)
});
export default connect(mapStateToProps)(CollectionPage);
