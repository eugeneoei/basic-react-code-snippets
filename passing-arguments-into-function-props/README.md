# Passing Arguments into Function Props

This code snippet example repo demonstrates how you can pass parameter(s) to a function prop from a child component.

# Demo

Since `imageUrl` and `imageName` are already available in `props`, you can use these values to invoke the function prop like the following.

```js
// SmallImage.js
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
```

The function prop will then accept these arguments and update the states accordingly.

```js
// Images.js
const handleUpdateBigImage = (url, name) => {
	setBigImageUrl(url)
	setBigImageName(name)
}
```

Within the handler (in this case `handleImageClick`) of the click event, you can execute any other implementations/logics/manipulations as required, as long as it serves your intended purpose. 

Maybe you want to implement a `clickCount` to display the number of times an image has been clicked. Your image component may look something like this:

```js
// SmallImageWithCounter.js
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
```

Run the code and play around with the implementations!
