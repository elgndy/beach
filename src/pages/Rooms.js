import React from 'react';
import Hero from '../component/Hero';
import Banner from '../component/Banner';
import {Link} from 'react-router-dom';
import RoomsContainer from '../component/RoomsContainer';
const Rooms =  () => {
    return(
        <>
        <div className="rooms">
            <Hero Hero="roomsHero">
                <div className="cover">
                <Banner title="The Our Rooms" subtitle="">
                <Link to="/" className="btn-praymary">Retun Home</Link>
                </Banner>
                </div>
            </Hero>
            
        </div>
        <RoomsContainer />
        </>
    )
}

export default Rooms;