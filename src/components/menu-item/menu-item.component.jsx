import React from 'react';

// !    withRouter is a Higher Order Component (HOC)
// *    HOC:
// *    function that takes any component
// *    and modifies it in some way &
// *    returns that modified component
import { withRouter } from 'react-router-dom';
import './menu-item.styles.scss';

const MenuItem = (props) => {

    const { title, imageUrl, size, linkUrl, history, match } = props;

    return (
        <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
            
            <div className="background-image" 
            style={{
                'backgroundImage': `url(${imageUrl})`
            }} >
            </div>

            <div className="content">
                <h1 className="title">
                    { title.toUpperCase() }
                </h1>
                <span className="subtitle">
                    Shop Now
                </span>

                {/* <img src={require('../../assets/images/shop-img/hats/blue-beanie.png')} alt="name" /> */}
            </div>
        </div>
    );
};

export default withRouter(MenuItem);
