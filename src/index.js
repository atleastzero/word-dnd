import React, { Component } from 'react';
import Room from './containers/Room/Room'
import SettingsButton from './components/Settings/SettingsButton/SettingsButton'
import Settings from './components/Settings/Settings'
// import RoomInfo from './components/RoomInfo/RoomInfo'
import ReactDOM from 'react-dom'
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'
import ItemTypes from './components/Word/ItemTypes/ItemTypes';



// import Inventory from '/components/Settings'

class Interface extends Component {
    state = {
        start_inventory: [
            { name: 'login', type: ItemTypes.CIRCLE_CARD },
            { name: 'signup', type: ItemTypes.CIRCLE_CARD },
        ],
        inventory: [
            { name: 'light', type: ItemTypes.SQUARE_CARD },
            { name: 'scary', type: ItemTypes.SQUARE_CARD },
            { name: 'shelf', type: ItemTypes.ARROW_CARD },
        ],
        current_room: 1000,
        rooms: {
            1000: {
                main: "I would like to [].",
                mainItem: null,
                mainItemType: ItemTypes.CIRCLE_CARD,
                mainDefault: "do nothing"
            },
            0: {
                main: "You are in a [] room.",
                mainItem: null,
                mainItemType: ItemTypes.SQUARE_CARD, 
                mainDefault: "dark"
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

    // wordChanged = (originalWord, newWord) => {
    //     var inventory =  this.state.inventory
    //     if (originalWord === null) {

    //     }
    // }

    render() {
        var inventory = this.state.inventory
        if (this.state.current_room === 1000) {
            inventory = this.state.start_inventory
        }

        return <div className="App">
			<DndProvider backend={Backend}>
                <Room
                    mainInfo={this.state.rooms[this.state.current_room].main}
                    mainItem={this.state.rooms[this.state.current_room].mainItem}
                    mainItemType={this.state.rooms[this.state.current_room].mainItemType}
                    mainDefault={this.state.rooms[this.state.current_room].mainDefault}
                    wordChanged={this.wordChanged}
                    inventory={inventory}
                >
                    <SettingsButton
                        settingsOpened={this.settingsHandler}
                    />
                    <Settings 
                        show={this.state.showSettings}
                        settingsClosed={this.settingsCloseHandler}
                    />
                    {/* <RoomInfo
                        mainInfo={this.state.rooms[this.state.current_room].main}
                        mainItem={this.state.rooms[this.state.current_room].mainItem}
                    >
                    </RoomInfo> */}
                    {/* <Inventory 
                        contents={this.state.inventory}
                    /> */}
                    {/* <Map 
                        room={this.state.current_room}
                        roomState={this.state.rooms[this.state.current_room].mainItem}
                    /> */}
                </Room>
            </DndProvider>
        </div>
    }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<Interface />, rootElement)