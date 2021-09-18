import React, { useState, useEffect, useRef } from 'react'
import strawberry from './data'
import './App.css'

import { calculateSum } from './calculation'

console.log(strawberry)

const App = () => {

	// useState(0) ===> [valueOfCurrentState, functionToUpdateValueOfCurrentState]

	const [apple, setApple] = useState(0)
	const [durian, setDurian] = useState(7)
	const [orange, setOrange] = useState(8)

	const [inputText, setInputText] = useState('jason')

	const uncontrolledInputRef = useRef(null)

	const handleDecrement = () => {
		setApple(apple - 1)
	}

	const handleIncrement = () => {
		const newValueOfApple = apple + 1
		setApple(newValueOfApple)
		if (newValueOfApple > 5) {
			setDurian(durian + 1)
		}
	}

	const handleGetSum = (value) => {
		return calculateSum(value, 10)
	}

	const handleInputTextChange = (event) => {
		// event.target.value is the latest value of the input element
		setInputText(event.target.value)
	}

	const handleInputTextClick = (event) => {
		console.log('INPUT CLICK!!!!!')
	}

	const handleInputTextMouseEnter = (event) => {
		console.log('INPUT MOUSE ENTER!!!!')
	}

	const handleGetInputValue = () => {
		console.log(`The latest value of the CONTROLLED input element is ${inputText}`)
	}

	const handleGetUncontrolledInputValue = () => {
		console.log(uncontrolledInputRef)
		console.log(`The latest value of the UNCONTROLLED input element is ${uncontrolledInputRef.current.value}`)
	}

	// useEffect takes in 2 arguments
	// the first argument is a callback
	// the second argument is OPTIONAL and is a dependency array
	// useEffect(
	// 	callback,
	// 	[
	// 		variableOne,
	// 		variableTwo,
	// 		.
	// 		.
	// 		.
	// 		.
	// 	]
	// )

	// useEffect without dependency array
	useEffect(() => {
		console.log('hello useEffect without dependency array')
	})

	// useEffect with dependency array
	// if any of the variable in the dependency array changes, callback gets invoked
	useEffect(() => {
		console.log('hello useEffect with dependency array')
	}, [
		durian,
		orange
	])

	// useEffect with EMPTY dependency array
	// executes only once regardless
	useEffect(() => {
		console.log('hello useEffect with EMPTY dependency array')
	}, [])

	return (
		<div className="App">
			<h1>Basic React</h1>
			<div>
				<button
					onClick={handleDecrement}
				>
					-
				</button>
				<p>
					The value of apple is : {apple}
				</p>
				<button
					onClick={handleIncrement}
				>
					+
				</button>
			</div>
			<br />
			<p>{handleGetSum(apple)}</p>
			<br />
			{
				strawberry.map(d => {
					return (
						<div key={d.city}>
							<img
								src={d.img}
								alt={d.city}
							/>
						</div>
					)
				})
			}
			<br />
			<h4>Controlled vs Uncontrolled Inputs</h4>
			<div>
				<h4>Controlled Input Text ie input value is controlled by state</h4>
				<input
					type='text'
					value={inputText}
					onChange={handleInputTextChange}
					onClick={handleInputTextClick}
					onMouseEnter={handleInputTextMouseEnter}
				/>
				<br />
				<button onClick={handleGetInputValue}>
					Tell me the value of the controlled input element NOW!
				</button>
			</div>

			<div>
				<h4>Controlled Input Text ie input value is NOT controlled by state</h4>
				<input
					ref={uncontrolledInputRef}
					type='text'
				/>
				<br />
				<button onClick={handleGetUncontrolledInputValue}>
					Tell me the value of the uncontrolled input element NOW!
				</button>
			</div>
		</div>
	)
}

export default App

