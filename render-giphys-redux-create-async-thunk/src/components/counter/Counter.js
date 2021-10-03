import React from 'react'
import { useSelector } from 'react-redux'

const Counter = () => {
	
	const counter = useSelector(state => state.counter.value)

	return (
		<div className='my-4 text-success'>
			<h4>
				Number of times Giphy API has been called successfully: {counter} time{counter > 1 && 's'}.			
			</h4>
		</div>
	)
}

export default Counter
