import React from 'react';
import { Route, Switch } from 'react-router-dom';

import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview';
import CollectionPage from '../Collection/Collection';

const Shop = ({ match }) => {
  return (
    <div className='shop-page'>
      <Switch>
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
        <Route path={`${match.path}`} component={CollectionsOverview} />
      </Switch>
    </div>
  );
};

export default Shop;
