import React, { useState } from 'react'
import clsx from 'clsx'
import './Giphy.css'

const Giphy = props => {

	const {
		giphy,
		isGettingGiphy,
		doesGiphyExistInFavourite,
		getNewGiphy,
		addGiphyToFavourites
	} = props

	const [isHover, setIsHover] = useState(false)

	const handleClickNewGiphy = () => {
		getNewGiphy('random')
	}

	const handleMouseEnter = () => {
		setIsHover(true)
	}

	const handleMouseLeave = () => {
		setIsHover(false)
	}
	
	return (
		<div className='container mt-5'>
			<div className='row'>
				<div className='col-12'>
					<h4>Random Giphy</h4>
				</div>
			</div>
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
										onClick={doesGiphyExistInFavourite ? null : addGiphyToFavourites}
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
									onClick={handleClickNewGiphy}
								>
									Click Me To Get New Random Giphy Again!
								</button>
							</div>
						</div>
					</div>
				)
			}
		</div>
	)
}

export default Giphy
