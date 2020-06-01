import React , {Component} from 'react'
import RoomList from './RoomList'
import {Loading} from './Loading';
import {RoomContext} from '../context';
import FillterRoom from './FillterRoom'
 class RoomsContainer extends Component {
    static contextType = RoomContext;
    render(){
        const {loading  , sortedRooms} = this.context;
    if(loading){
        return <Loading />
    }
    return (    
        <>
            <FillterRoom />
            <RoomList rooms={sortedRooms} />
        </>
    )

}
    }
    
export default RoomsContainer;
