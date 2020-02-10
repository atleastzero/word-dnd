import React, { Component } from 'react';

import SettingsButton from '../components/Settings/SettingsButton/SettingsButton'
// import Settings from '../components/Settings/Settings'
// import RoomInfo from '/components/RoomInfo'
// import Inventory from '/components/Settings'
import Aux from '../hoc/Aux'

class Interface extends Component {
    state = {
        inventory: [
            "[light]"
        ],
        current_room: 0,
        rooms: {
            0: {
                main: "You are in a [] room.",
                mainItem: "dark"
            }
        },
        showSettings: false
    }

    render() {
        return <Aux>
            <SettingsButton />
            {/* <Settings 
                show={this.state.showSettings}
                closed={this.closeSettings}
            /> */}
            {/* <RoomInfo
                mainInfo={this.state.rooms[this.state.current_room].main}
            >
                {this.state.rooms[this.state.current_room].mainItem}
            </RoomInfo>
            <Inventory 
                contents={this.state.inventory}
            /> */}
            {/* <Map 
                room={this.state.current_room}
                roomState={this.state.rooms[this.state.current_room].mainItem}
            /> */}
        </Aux>
    }
}

export default Interface;