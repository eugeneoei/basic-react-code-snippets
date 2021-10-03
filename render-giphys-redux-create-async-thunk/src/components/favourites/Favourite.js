import React, { useState } from 'react'
import './Favourite.css'

const Favourite = props => {

	const {
		id,
		src,
		title,
		viewFavouriteGiphy,
		removeGiphyFromFavourites
	} = props

	const [isHover, setIsHover] = useState(false)

	const handleGiphyClick = () => {
		viewFavouriteGiphy({
			id,
			src,
			title
		})
	}

	const handleRemoveGiphy = () => {
		removeGiphyFromFavourites(id)
	}

	const handleMouseEnter = () => {
		setIsHover(true)
	}

	const handleMouseLeave = () => {
		setIsHover(false)
	}
	
	return (
		<div
			className='col-xs-6 col-sm-4 col-md-3 col-xl-2 p-0 position-relative'
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<img
				style={{
					height: '200px'
				}}
				className='favourite-image'
				src={src}
				alt={title}
				onClick={handleGiphyClick}
			/>
			{
				isHover && (
					<button
						className='btn btn-danger rounded-0 position-absolute start-0 bottom-0 w-100'
						onClick={handleRemoveGiphy}
					>
						<span className='d-inline-block'>
							Remove from Favourites
						</span>
					</button>
				)
			}
		</div>
	)
}

export default Favourite
