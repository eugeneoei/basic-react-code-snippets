import React, { useState, useEffect } from 'react'
import clsx from 'clsx'

const Counter = props => {

	const {
		name,
		resetCount,
		resetAllCounters
	} = props

	const [count, setCount] = useState(0)

	const handleIncrement = () => {
		setCount(count + 1)
	}

	const handleDecrement = () => {
		setCount(count - 1)
	}

	const handleResetCount = () => {
		setCount(0)
	}

	useEffect(() => {
		handleResetCount()
	}, [
		resetCount
	])

	return (
		<>
			<h6>{name}</h6>
			<p>
				<button
					type='button'
					className='btn btn-primary'
					onClick={handleDecrement}
				>
					-
				</button>
				<span
					className={
						clsx(
							'mx-3',
							{'text-success' : count > 0 },
							{'text-danger' : count < 0 }
						)
					}
				>
					{count}
				</span>
				<button
					type='button'
					className='btn btn-primary'
					onClick={handleIncrement}
				>
					+
				</button>
			</p>
			<p>
				<button
					type='button'
					className='btn btn-primary'
					onClick={resetAllCounters}
				>
					Reset All Counters
				</button>
			</p>
		</>
	)

}

export default Counter