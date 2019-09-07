import { createSelector } from 'reselect';

// const collection_id_map = {
//   hats: 100,
//   sneakers: 10,
//   jackets: 19,
//   womens: 25,
//   mens: 33
// };

const selectShop = state => {
  return state.shop;
};

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

// export const selectCollection = collectionUrlParam =>
//   createSelector(
//     [selectCollections],
//     collections => {
//       collections.find(collection => {
//         console.log(collection.id === collection_id_map[collectionUrlParam]);
//         return collection.id === collection_id_map[collectionUrlParam];
//       });
//     }
//   );
