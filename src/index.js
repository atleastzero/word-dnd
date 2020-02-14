import React, { Component } from 'react';
import Room from './containers/Room/Room'
import SettingsButton from './components/Settings/SettingsButton/SettingsButton'
import Settings from './components/Settings/Settings'
import ReactDOM from 'react-dom'
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'
import ItemTypes from './components/Word/ItemTypes/ItemTypes';

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
                mainItem: {
                    name: "dark",
                    type: ItemTypes.SQUARE_CARD
                }
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
        return <div className="App">
			<DndProvider backend={Backend}>
                <Room
                    inventory={this.state.inventory}
                    mainInfo={this.state.rooms[this.state.current_room].main}
                    mainItem={this.state.rooms[this.state.current_room].mainItem}
                >
                    <SettingsButton
                        settingsOpened={this.settingsHandler}
                    />
                    <Settings 
                        show={this.state.showSettings}
                        settingsClosed={this.settingsCloseHandler}
                    />
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