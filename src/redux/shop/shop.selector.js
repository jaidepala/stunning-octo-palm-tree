import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectShopSections = createSelector(
    
    [ selectShop ],
    shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [ selectShopSections ],
  collections => Object.keys(collections).map(key => collections[key])
);

export const selectCollection = collectionUrlParam => 
    createSelector(
        [ selectShopSections ],
        collections => collections[collectionUrlParam]
    )
