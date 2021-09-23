import React from 'react'
import classNames from 'classnames/bind'
import styles from './SmallImage.css'

const cx = classNames.bind(styles)

const SmallImage = props => {

	const {
		imageUrl,
		imageName,
		selectedImageName,
		selectImage
	} = props

	const handleImageClick = () => {
		selectImage(imageUrl, imageName)
	}
	
	return (
		<div className='col-6 gx-0'>
			<img
				className={
					cx(
						'small-image',
						{['small-image-selected'] : selectedImageName === imageName}
					)
				}
				src={imageUrl}
				alt={imageName}
				onClick={handleImageClick}
			/>
		</div>
	)
}

export default SmallImage
