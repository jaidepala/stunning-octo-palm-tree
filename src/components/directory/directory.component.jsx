import React from 'react';

// Components
    import MenuItem from '../menu-item/menu-item.component';

// Styles
    import './directory.styles.scss';

// Data
    // import sections from './directory.data'; 

// Redux
    import { connect } from 'react-redux';
    import { createStructuredSelector } from 'reselect';
    import { selectDirectorySections } from '../../redux/directory/directory.selector';

const Directory = ({ sections }) => {
    
    return (<div className="directory-menu">

        {
            sections.map(({ id,  ...otherSectionProps }) => (

                <MenuItem 
                    key={ id }
                    {...otherSectionProps}
                />
            ))
        }    
    </div>);
};

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
});

export default connect( mapStateToProps )( Directory );
