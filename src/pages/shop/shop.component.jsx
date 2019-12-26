import React from 'react';

// Data
    // import SHOP_DATA from './shop.data.js';

// Components
    import CollectionPage from '../collection/collection.component';
    import CollectionOverview from '../../components/collection-overview/collection-overview.component';

// Route
    import { Route } from 'react-router-dom';

const ShopPage = ({ match }) => {

    return (
        <div className="shop-page">
            <Route exact path={ `${match.path}` } component={ CollectionOverview } />
            <Route path={ `${match.path}/:collectionId` } component={ CollectionPage } />
        </div>
    );
};

export default ShopPage;
