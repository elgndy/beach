import React, { Component } from 'react';
import Items from './data';

const RoomContext = React.createContext();

export default class RoomProvider extends Component {
    state = {
        rooms:[],
        sortedRooms:[],
        featuredRooms:[],
        loading:true
    };

//get data 

componentDidMount () {
    const rooms = this.FormatData(Items);
    const featuredRooms = rooms.filter((room) => room.featured === true );
    this.setState({
        rooms,
        featuredRooms,
        sortedRooms:rooms,
        loading:false,

    })
}

FormatData = (Items) => {
    const tempItems = Items.map((item) => {
        
             const id = item.sys.id;
             const images = item.fields.images.map( image => image.fildes.file.url);

             const room = {...item.fields , images , id};

             return room;
    })

    return tempItems;
}


//get room slug

getRoom = (slug) => {
    let tempRoom = [...this.state.rooms];
    let room = tempRoom.find((room) => room.slug === slug );

    return room;
}
    render() {
        return (
            <RoomContext.Provider value={{
                ...this.state ,
             getRoom:this.getRoom
             
             }}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer;




export{RoomContext , RoomConsumer , RoomProvider};
