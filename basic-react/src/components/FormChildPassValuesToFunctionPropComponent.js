import React, { useRef } from 'react'

const FormChildPassValuesToFunctionPropComponent = props => {

	const { childPassValuesSubmit } = props
	const childFirstNameRef = useRef('')
	const childLastNameRef = useRef('')

	const handleSubmit = event => {
		event.preventDefault()
		childPassValuesSubmit(
			childFirstNameRef.current.value,
			childLastNameRef.current.value
		)
	}
	
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div>
					<label>
						First Name:
					</label>
					<input
						type='text'
						name='firstName'
						ref={childFirstNameRef}
					/>
				</div>
				<div>
					<label>
						Last Name:
					</label>
					<input
						type='text'
						name='lastName'
						ref={childLastNameRef}
					/>
				</div>
				<div>
					<button
						type='submit'
						onClick={handleSubmit}
					>
						Submit Form
					</button>
				</div>
			</form>
		</div>
	)
}


export default FormChildPassValuesToFunctionPropComponent 
