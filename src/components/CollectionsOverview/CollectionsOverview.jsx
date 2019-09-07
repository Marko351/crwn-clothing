import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import PreviewCollection from '../PrviewCollection/PreviewCollection';
import { selectCollectionsForPreview } from '../../redux/shop/shopSelectors';

import './CollectionsOverview.scss';

const CollectionsOverview = ({ collections }) => {
  return (
    <div className='collections-overview'>
      {collections.map(({ id, ...otherCollectionProps }) => {
        return <PreviewCollection key={id} {...otherCollectionProps} />;
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);
