import React, { useState } from 'react'
import classNames from 'classnames/bind'
import styles from '../App.css'

const cx = classNames.bind(styles)

const SmallImageWithCounter = props => {

	const [clickCount, setClickCount] = useState(0)

	const {
		imageUrl,
		imageName,
		selectedImageName,
		selectImage
	} = props

	const isImageSelected = selectedImageName === imageName

	const handleImageClick = () => {
		if (!isImageSelected) {
			setClickCount(clickCount + 1)
			selectImage(imageUrl, imageName)
		}
	}
	
	return (
		<div className='col-6 gx-0 small-image-container'>
			<img
				className={
					cx(
						'small-image',
						{'small-image-selected' : isImageSelected}
					)
				}
				src={imageUrl}
				alt={imageName}
				onClick={handleImageClick}
			/>
			<div className='small-image-counter'>
				{clickCount}
			</div>
		</div>
	)
}

export default SmallImageWithCounter
