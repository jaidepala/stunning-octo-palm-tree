import React from 'react';

// Stylings
    import './collection-overview.styles.scss';

// Redux
    import { connect } from 'react-redux';
    import { createStructuredSelector } from 'reselect';
    import { selectCollectionsForPreview } from '../../redux/shop/shop.selector';

// Components
    import CollectionPreview from '../collection-preview/collection-preview.component';

const CollectionOverview = ({ collections }) => {

    return (
        <div className="collection-overview">
        {
            collections.map(({ id, ...otherCollectionProps }) => (

                <CollectionPreview 
                    key={id}
                    {...otherCollectionProps}
                />
            ))
        }
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect( mapStateToProps )( CollectionOverview );;
