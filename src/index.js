import React from 'react'
import ReactDOM from 'react-dom'
import Interface from './containers/Interface'
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'

function App() {
	return (
		<div className="App">
			<DndProvider backend={Backend}>
				<Interface />
			</DndProvider>
		</div>
	)
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
