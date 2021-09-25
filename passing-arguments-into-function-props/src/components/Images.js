import React, { useState } from 'react'
import BigImage from './BigImage'
import SmallImage from './SmallImage'
import data from '../data/data'

const defaultImage = data[0]

const Images = () => {

	const [bigImageUrl, setBigImageUrl] = useState(defaultImage.img)
	const [bigImageName, setBigImageName] = useState(defaultImage.city)

	const handleUpdateBigImage = (url, name) => {
		setBigImageUrl(url)
		setBigImageName(name)
	}
	
	return (
		<div className='image-container'>
			<div className='row'>
				<BigImage
					imageUrl={bigImageUrl}
					imageName={bigImageName}
				/>
			</div>
			<div className='row'>
				{
					data.map(d => (
						<SmallImage
							key={d.city}
							imageUrl={d.img}
							imageName={d.city}
							selectedImageName={bigImageName}
							selectImage={handleUpdateBigImage}
						/>
					))
				}
			</div>
		</div>
	)
}



export default Images
