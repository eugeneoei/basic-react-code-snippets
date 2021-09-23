import React, { useState } from 'react'
import BigImage from './BigImage'
import SmallImage from './SmallImage'
import data from '../data/data'

const defaultImage = data[0]

const Images = props => {

	const { showClickCount } = props

	const [bigImageUrl, setBigImageUrl] = useState(defaultImage.img)
	const [bigImageImage, setBigImageName] = useState(defaultImage.city)

	const handleUpdateBigImage = (url, name) => {
		setBigImageUrl(url)
		setBigImageName(name)
	}
	
	return (
		<div className='image-container'>
			<div className='row'>
				<BigImage
					imageUrl={bigImageUrl}
					imageName={bigImageImage}
				/>
			</div>
			<div className='row'>
				{
					data.map(d => (
						<SmallImage
							key={d.city}
							imageUrl={d.img}
							imageName={d.city}
							selectedImageName={bigImageImage}
							showClickCount={showClickCount}
							selectImage={handleUpdateBigImage}
						/>
					))
				}
			</div>
		</div>
	)
}



export default Images
