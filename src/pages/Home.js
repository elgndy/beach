import React from 'react';
import vedio from '../imgs/ved.mp4';
import {Link} from 'react-router-dom'
import Banner from '../component/Banner';
import Services from '../component/Services';
import FeaturedRoom from '../component/FeaturedRoom';
const Home =  () => {
    return(
        <div className="home">
            <div className="pair_vedio">
          
          <video src={vedio} className="ved" autoPlay="true" loop="true" />
          <div className="cover">
              <Banner title='luxuriose rooms' subtitle="Delux Rooms Starting at $299" >
                  <Link to="/rooms" className="btn-praymary">Our Rooms</Link>
                  </Banner>   
              </div>
          </div>

          <Services />

          <FeaturedRoom />
                
      </div>
    )
}

export default Home;