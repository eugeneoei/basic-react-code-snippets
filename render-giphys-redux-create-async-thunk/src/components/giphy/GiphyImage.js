import React, { useState } from 'react'
import clsx from 'clsx'
import './GiphyImage.css'

const GiphyImage = props => {

	const {
		giphy,
		doesGiphyExistInFavourite,
		addGiphyToFavourites,
		getNewRandomGiphy
	} = props

	const [isHover, setIsHover] = useState(false)

	const handleMouseEnter = () => {
		setIsHover(true)
	}

	const handleMouseLeave = () => {
		setIsHover(false)
	}

	const handleAddToFavourites = () => {
		addGiphyToFavourites(giphy)
	}

	const handleClickNewRandomGiphy = () => {
		getNewRandomGiphy({
			type: 'random'
		})
	}

	return (
		<div className='row justify-content-center'>
			<div
				className='col-12 col-md-5 col-lg-4 col-xl-3 p-0 position-relative'
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				<img
					className='d-block my-0 w-100'
					src={giphy.src}
					alt={giphy.title}
				/>
				{
					isHover && (
						<button
							className={
								clsx(
									'btn',
									'giphy-btn',
									{'btn-warning': doesGiphyExistInFavourite},
									{'btn-success': !doesGiphyExistInFavourite},
								)
							}
							onClick={doesGiphyExistInFavourite ? null : handleAddToFavourites}
							disabled={doesGiphyExistInFavourite}
						>
							{
								doesGiphyExistInFavourite ? (
									'Giphy Already in Favourites'
								) : (
									<>
										<span className='d-inline-block me-2'>Add To Favourites</span>
										<i className='bi bi-heart-fill giphy-icon'></i>
									</>

								)
							}
						</button>
					)
				}
			</div>
			<div className='col-12 md-6'>
				<div className='my-3'>
					<button
						className='btn btn-primary mx-2'
						onClick={handleClickNewRandomGiphy}
					>
						Click Me To Get New Random Giphy Again!
					</button>
				</div>
			</div>
		</div>
	)
}

export default GiphyImage
