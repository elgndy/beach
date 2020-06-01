import React from 'react'
import def_bac from '../imgs/room15.png'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
const Room = ({room}) => {
 
    const {images , slug , price ,name} = room;
    
    return (
        <article className="room">
            <div className="img-container">
                <header className="cover2"></header>
                <img src={images[0] || def_bac } alt="single room" />
                <div>
                   <span>${price}</span>
                   <span>Per Night</span> 
                </div> 
                <Link className='btn-praymary featu-btn' to={`rooms/${slug}`}>Features</Link>
                <p className="room-info">
                    {name}
                </p>
            </div>
        </article>
    )
}

Room.prototype = {
    Room:PropTypes.shape({
        name:PropTypes.string.isRequired,
        slug:PropTypes.string.isRequired,
        price:PropTypes.number.isRequired,
        images:PropTypes.arrayOf(PropTypes.string).isRequired
    })
}

export default Room;