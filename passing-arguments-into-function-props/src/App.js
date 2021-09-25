import Images from './components/Images'
import ImagesWithCounter from './components/ImagesWithCounter'
import './App.css'

const App = () => {
	return (
		<div className='app'>
			<h1 className='mb-4'>
				Passing Arguments into Function Props
			</h1>
			<Images />
			<div className='divider'></div>
			<h1 className='mb-4'>
				Passing Arguments into Function Props With Click Counter
			</h1>
			<ImagesWithCounter />
		</div>
	)
}

export default App
