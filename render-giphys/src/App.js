import React, { useState, useEffect } from 'react'
import Giphy from './components/giphy/Giphy'
import Favourites from './components/favourites/Favourites'
import Form from './components/form/Form'
import { getGiphy } from './utils/api'
import './App.css'

const App = () => {

	const [giphy, setGiphy] = useState('')
	const [isGettingGiphy, setIsGettingGiphy] = useState(true)
	const [doesGiphyExistInFavourite, setDoesGiphyExistInFavourite] = useState(false)
	const [favourites, setFavourites] = useState([])

	const handleViewFavouriteGiphy = selectedGiphy => {
		setGiphy(selectedGiphy)
	}

	const removeGiphyFromFavourites = giphyId => {
		setFavourites(favourites.filter(favourite => favourite.id !== giphyId))
	}

	const handleAddGiphyToFavourites = () => {
		setFavourites([
			...favourites,
			giphy
		])
	}

	const handleGetNewGiphy = async (type, query) => {
		setIsGettingGiphy(true)
		const data = await getGiphy(type, query)
		setGiphy({
			id: data.id,
			src: data.image_url,
			title: data.title
		})
		setIsGettingGiphy(false)
	}

	useEffect(() => {
		handleGetNewGiphy('random')
	}, [])

	useEffect(() => {
		const favouritesIds = favourites.map(favourite => favourite.id)
		const isGiphyInFavourites = favouritesIds.includes(giphy.id)
		setDoesGiphyExistInFavourite(isGiphyInFavourites)
	}, [
		giphy,
		favourites
	])

	return (
		<div className='app'>
			<h1>Render Giphys</h1>
			<Favourites
				favourites={favourites}
				viewFavouriteGiphy={handleViewFavouriteGiphy}
				removeGiphyFromFavourites={removeGiphyFromFavourites}
			/>
			<Giphy
				giphy={giphy}
				isGettingGiphy={isGettingGiphy}
				doesGiphyExistInFavourite={doesGiphyExistInFavourite}
				getNewGiphy={handleGetNewGiphy}
				addGiphyToFavourites={handleAddGiphyToFavourites}
			/>
			<Form
				isGettingGiphy={isGettingGiphy}
				searchGiphy={handleGetNewGiphy}
			/>
		</div>
	)
}

export default App
