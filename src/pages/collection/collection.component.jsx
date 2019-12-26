import React from 'react';

// Stylings
    import './collection.styles.scss';

// Components
    import CollectionItem from '../../components/collection-item/collection-item.component';

// Redux
    import { connect } from 'react-redux';
    // import { createStructuredSelector } from 'reselect';
    import { selectCollection } from '../../redux/shop/shop.selector'

const CollectionPage = ({ collection }) => {

    const { title, items } = collection;

    return (
        <div className="collection-page">
            <h2>
                { title }
            </h2>
            <div className="items">
                {
                    items.map(
                        item => (<CollectionItem key={ item.id   } item={ item } />)
                    )
                }
            </div>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
  });

export default connect( mapStateToProps )( CollectionPage );
