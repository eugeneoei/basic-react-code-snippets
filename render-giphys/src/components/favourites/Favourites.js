import React from 'react'
import Favourite from './Favourite'

const Favourites = props => {

	const {
		favourites,
		viewFavouriteGiphy,
		removeGiphyFromFavourites
	} = props

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
								viewFavouriteGiphy={viewFavouriteGiphy}
								removeGiphyFromFavourites={removeGiphyFromFavourites}
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
