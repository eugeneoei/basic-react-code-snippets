import React, { useState } from 'react'

const Form = props => {

	const {
		isGettingGiphy,
		searchGiphy
	} = props
	const [inputText, setInputText] = useState('')

	const handleInputTextChange = e => {
		setInputText(e.target.value)
	}

	const handleSubmit = e => {
		e.preventDefault()
		searchGiphy('search', inputText)
		setInputText('')
	}
	
	return (
		<div className='container mt-5'>
			<div className='row justify-content-center'>
				<div className='col-12'>
					<h4>Search For a Giphy!</h4>
				</div>
				<div className='col-xs-12 col-md-6 col-lg-3'>
					{
						isGettingGiphy ? (
							<div
								className='spinner-border text-primary'
								role='status'
							>
								<span className='visually-hidden'>Loading...</span>
							</div>
						) : (
							<form onSubmit={handleSubmit}>
								<div>
									<input
										type='text'
										className='form-control'
										placeholder='Coding...'
										value={inputText}
										onChange={handleInputTextChange}
									/>
								</div>
								<div>
									<button
										className='btn btn-outline-primary mt-3'
										disabled={inputText === ''}
									>
										Go!
									</button>
								</div>
							</form>
						)
					}
				</div>
			</div>
		</div>
	)
}

export default Form
