import React, { useState, useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import GiphyImage from './GiphyImage'
import { fetchGiphy } from '../../redux/giphy/giphyService'
import { addToFavourite } from '../../redux/favourites/favouritesSlice'

const Giphy = () => {

	const giphy = useSelector(state => state.giphy.giphy)
	const favourites = useSelector(state => state.favourites.entities)
	const dispatch = useDispatch()

	const [isGettingGiphy, setIsGettingGiphy] = useState(true)
	// const [isGettingGiphy, setIsGettingGiphy] = useState(false)
	const [fetchGiphyErrorMessage, setFetchGiphyErrorMessage] = useState(null)
	const [doesGiphyExistInFavourite, setDoesGiphyExistInFavourite] = useState(false)

	const handleAddGiphyToFavourites = giphyToAdd => {
		dispatch(addToFavourite(giphyToAdd))
	}

	const handleFetchNewGiphy = useCallback(
		async payload => {
			setIsGettingGiphy(true)
			setFetchGiphyErrorMessage(null)
			try {
				// necessary to call "unwrap()" which will throw
				// and be caught in "catch" block if API call is rejected
				await dispatch(fetchGiphy(payload)).unwrap()
			} catch (error) {
				setFetchGiphyErrorMessage(error.message)
			}
			setIsGettingGiphy(false)
		}, [
			dispatch
		]
	)

	useEffect(() => {
		if (giphy) {
			const favouritesIds = favourites.map(favourite => favourite.id)
			const isGiphyInFavourites = favouritesIds.includes(giphy.id)
			setDoesGiphyExistInFavourite(isGiphyInFavourites)
		}
	}, [
		giphy,
		favourites
	])

	useEffect(() => {
		handleFetchNewGiphy({
			type: 'random'
		})
	}, [
		handleFetchNewGiphy
	])
	
	return (
		<div className='container mt-5'>
			<div className='row'>
				<div className='col-12'>
					<h4>Random Giphy</h4>
				</div>
			</div>
			{
				fetchGiphyErrorMessage && (
					<div className='row'>
						<div className='col-12 text-danger'>
							{fetchGiphyErrorMessage}
						</div>
					</div>
				)
			}
			{
				isGettingGiphy ? (
					<div className='row'>
						<div className='col-12'>
							<div
								className='spinner-border text-primary'
								role='status'
							>
								<span className='visually-hidden'>Loading...</span>
							</div>
						</div>
					</div>
				) : (
					giphy && (
						<GiphyImage
							giphy={giphy}
							doesGiphyExistInFavourite={doesGiphyExistInFavourite}
							addGiphyToFavourites={handleAddGiphyToFavourites}
							getNewRandomGiphy={handleFetchNewGiphy}
						/>
					)
				)
			}
		</div>
	)
}

export default Giphy
