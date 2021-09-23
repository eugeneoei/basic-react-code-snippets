import React from 'react'
import './BigImage.css'

const BigImage = props => {

	const { imageUrl, imageName } = props
	
	return (
		<div className='col-12 gx-0'>
			<img
				className='big-image'
				src={imageUrl}
				alt={imageName}
			/>
		</div>
	)
}

export default BigImage
