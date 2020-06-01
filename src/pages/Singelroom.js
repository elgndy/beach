import React , {Component} from 'react';
import {Link} from 'react-router-dom';
import {RoomContext} from '../context';
import Banner from '../component/Banner';
import def_bac from '../imgs/room15.png'
import StyledHero from '../component/StyledComponent';
class Singelroom extends Component {

    constructor(props){
    super(props);  
    this.state = {
        slug:this.props.match.params.slug,
        def_bac
    }
}
//componentDidMount(){}
    static contextType = RoomContext;

    render() {
        const {getRoom} = this.context;
    const room = getRoom(this.state.slug);
    if(!room){
        return <div className="error">
            <h3>No Such Room Cloud Be Found...</h3>
            <Link to="/rooms" className="btn-praymary">Return To Rooms</Link>
        </div>
    } 
    
    const {
        pets,
        type,
        price,
        size,
        capacity,
        description,
        extras,
        breakfast,
        images
    } = room;


return (
    <div> 
        <StyledHero img={images[0]}>
            <div className="cover"></div>
            <Banner title={`${room.name} room `} subtitle="">
                <Link to="/rooms" className="btn-praymary">
                    Back to Rooms
                </Link>
            </Banner>
        </StyledHero>
        <section className="single_room">
            <div className="single_room_images">
                {images.map((img , index) => {
                    return <img key={index} src={img } alt={room.name} />
                })}
            </div>
        </section>

        <section className="single_room_info" >
            <article className="desc">
                <h3>Details</h3>
            <p>{description}</p>
            </article>
            <article className="info">
                <h3>Info</h3>
            <h6>Price : ${price}</h6>
            <h6>Size : ${size}</h6>
            <h6>
                Max capacity : {
                    capacity > 1 ? `${capacity} people `: `${capacity} person` 
                }
            </h6>
            <h6>
                {pets ? 'pets allowed ' : 'no pets allowed'}
            </h6>
            <h6>{breakfast && 'Free breakfast included'}</h6>
            </article>
            <article className="extras_info">
                <h3>Extras</h3>
                <ul className="exstras">
                {extras.map((extra , index) => {
                    return <li key={index}> {extra} </li>
                })}
                </ul>
            </article>
        </section>
    </div>  
) 
    
}
}

export default Singelroom;