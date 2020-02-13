import React, { Component } from 'react';

import Room from './Room/Room'
import SettingsButton from '../components/Settings/SettingsButton/SettingsButton'
import Settings from '../components/Settings/Settings'
import RoomInfo from '../components/RoomInfo/RoomInfo'
// import Inventory from '/components/Settings'

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

    settingsHandler = () => {
        this.setState({showSettings: true});
    }
    
    settingsCloseHandler = () => {
        this.setState({showSettings: false});
    }

    render() {
        return <Room>
            <SettingsButton
                settingsOpened={this.settingsHandler}
            />
            <Settings 
                show={this.state.showSettings}
                settingsClosed={this.settingsCloseHandler}
            />
            <RoomInfo
                mainInfo={this.state.rooms[this.state.current_room].main}
                mainItem={this.state.rooms[this.state.current_room].mainItem}
            >
            </RoomInfo>
            {/* <Inventory 
                contents={this.state.inventory}
            /> */}
            {/* <Map 
                room={this.state.current_room}
                roomState={this.state.rooms[this.state.current_room].mainItem}
            /> */}
        </Room>
    }
}

export default Interface;