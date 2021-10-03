import React from 'react'
import Favourite from './Favourite'

import { useSelector, useDispatch } from 'react-redux'
import { removeFromFavourite } from '../../redux/favourites/favouritesSlice'
import { setGiphy } from '../../redux/giphy/giphySlice'

const Favourites = () => {

	const favourites = useSelector(state => state.favourites.entities)
	const dispatch = useDispatch()

	const handleRemoveGiphyFromFavourites = id => {
		dispatch(removeFromFavourite(id))
	}

	const handleViewFavouriteGiphy = giphy => {
		dispatch(setGiphy(giphy))
	}

	return (
		<div className='container mt-5'>
			<div className='row'>
				<div className='col-12'>
					<h4>My Favourite Giphys</h4>
				</div>
			</div>
			<div className='row justify-content-center'>
				{
					favourites.length > 0 ? (
						favourites.map(favourite => (
							<Favourite
								key={favourite.id}
								id={favourite.id}
								src={favourite.src}
								title={favourite.title}
								viewFavouriteGiphy={handleViewFavouriteGiphy}
								removeGiphyFromFavourites={handleRemoveGiphyFromFavourites}
							/>
						))
					) : (
						<div className='col-xs-12'>
							No Gihpys in favourites yet!
						</div>
					)
				}
			</div>
		</div>
	)
}

export default Favourites
