import React from 'react';

function Photo(props) {
    return (
        <img className='img-fluid'
             src={ process.env.PUBLIC_URL + props.file }
             alt={ props.file + ' photo' }
        />
    );
}

export default Photo;
