import React from 'react';
import notFound from '../../../assets/images/not-found.gif'

const NotFound = () => {
    return (
        <div>
            <img className="w-100" src={notFound} alt=""  />
        </div>
    );
};

export default NotFound;