import React from 'react';


const Feature = ({image, title, paragraph}) => {
    return (
        <div className="feature">
            <figure className="feature__img__wrapper">
                <img className='feature__img' src={image} alt="" />
            </figure>
            <h4 className="feature__title">{title}</h4>
            <p className="feature__para">{paragraph}</p>
        </div>
    );
}

export default Feature;
