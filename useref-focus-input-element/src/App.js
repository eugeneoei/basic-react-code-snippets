import { useState, useRef } from 'react'
import clsx from 'clsx'
import './App.css'

const App = () => {

	const [currentFocusedInput, setCurrentFocusedInput] = useState('')
	const firstInputRef = useRef(null)
	const secondInputRef = useRef(null)

	const handleFocusFirstInputElement = () => {
		firstInputRef.current.focus()
		setCurrentFocusedInput(firstInputRef.current.id)
	}

	const handleFocusSecondInputElement = () => {
		secondInputRef.current.focus()
		setCurrentFocusedInput(secondInputRef.current.id)
	}

	return (
		<div className='app'>
			<h1 className='mb-4'>
				React "useRef" to focus on "input" element
			</h1>
			<div className='container'>
				<div className='row'>
					<div className='col-xs-12 col-sm-6 mb-4'>
						<div>
							<label
								className={
									clsx(
										{'text-success' : currentFocusedInput === 'first-input-element' },
										{'fw-bold' : currentFocusedInput === 'first-input-element' },
									)
								}
							>
								First Input Element:
							</label>
						</div>
						<div className='my-3'>
							<input
								id='first-input-element'
								type='text'
								className='input-element p-1'
								placeholder='Hello...'
								ref={firstInputRef}
							/>
						</div>
						<div>
							<button
								type='button'
								className='btn btn-primary'
								onClick={handleFocusFirstInputElement}
							>
								Click me to focus on FIRST input element!
							</button>
						</div>
					</div>
					<div className='col-xs-12 col-sm-6 mb-4'>
						<div>
							<label
								className={
									clsx(
										{'text-success' : currentFocusedInput === 'second-input-element' },
										{'fw-bold' : currentFocusedInput === 'second-input-element' },
									)
								}
							>
								Second Input Element:
							</label>
						</div>
						<div className='my-3'>
							<input
								id='second-input-element'
								type='text'
								className='input-element p-1'
								placeholder='World...'
								ref={secondInputRef}
							/>
						</div>
						<div>
							<button
								type='button'
								className='btn btn-primary'
								onClick={handleFocusSecondInputElement}
							>
								Click me to focus on SECOND input element!
							</button>
						</div>
					</div>

				</div>
			</div>
		</div>
	)
}

export default App
