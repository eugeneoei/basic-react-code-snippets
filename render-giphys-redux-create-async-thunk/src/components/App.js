import React from 'react'
import Giphy from './giphy/Giphy'
import Counter from './counter/Counter'
import Favourites from './favourites/Favourites'
import Form from './form/Form'
import './App.css'

const App = () => {
	return (
		<div className='app'>
			<h1>Render Giphys Using Redux with createAsyncThunk</h1>
			<Counter />
			<Favourites />
			<Giphy />
			<Form />
		</div>
	)
}

export default App
