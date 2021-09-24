import React from 'react'

const FormChildPassedRefComponent = props => {

	const {
		parentFirstNameRef,
		parentLastNameRef,
		parentFormSubmitPassedRef
	} = props
	
	return (
		<div>
			<form onSubmit={parentFormSubmitPassedRef}>
				<div>
					<label>
						First Name:
					</label>
					<input
						type='text'
						name='firstName'
						ref={parentFirstNameRef}
					/>
				</div>
				<div>
					<label>
						Last Name:
					</label>
					<input
						type='text'
						name='lastName'
						ref={parentLastNameRef}
					/>
				</div>
				<div>
					<button
						type='submit'
						onClick={parentFormSubmitPassedRef}
					>
						Submit Form
					</button>
				</div>
			</form>
		</div>
	)
}

export default FormChildPassedRefComponent
