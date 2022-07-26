import React from 'react'
import classNames from 'classnames/bind'
import styles from '../App.css'

const cx = classNames.bind(styles)

const SmallImage = props => {

	const {
		imageUrl,
		imageName,
		selectedImageName,
		selectImage
	} = props

	const isImageSelected = selectedImageName === imageName

	const handleImageClick = () => {
		selectImage(imageUrl, imageName)
	}
	
	return (
		<div className='col-6 gx-0'>
			<img
				className={
					cx(
						'small-image',
						{'small-image-selected' : isImageSelected}
					)
				}
				src={imageUrl}
				alt={imageName}
				onClick={isImageSelected ? null : handleImageClick}
			/>
		</div>
	)
}

export default SmallImage
