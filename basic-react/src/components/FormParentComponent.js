import React, { useRef } from 'react'
import FormChildPassedRefComponent from './FormChildPassedRefComponent'
import FormChildPassValuesToFunctionPropComponent from './FormChildPassValuesToFunctionPropComponent'

const FormParentComponent = () => {

	const firstNameRef = useRef('')
	const lastNameRef = useRef('')

	const handleFormChildPassedRefSubmit = event => {
		console.log('submitting form from FormChildPassedRefComponent')
		event.preventDefault()
		console.log('firstNameRef')
		console.log(firstNameRef)
		console.log(firstNameRef.current.value)
		console.log('')
		console.log('lastNameRef')
		console.log(lastNameRef)
		console.log(lastNameRef.current.value)
	}

	const handleFormChildPassedValues = (childFirstName, childLastName) => {
		console.log('childFirstName >>', childFirstName)
		console.log('childLastName >>', childLastName)
		const person = {
			firstName: childFirstName,
			lastName: childLastName
		}
	}

	return (
		<div className='my-5'>
			<h1>2 Ways of Uncontrolled Inputs</h1>
			<br/>
			<h4>1st Example - Passing ref to child component</h4>
			<FormChildPassedRefComponent
				parentFirstNameRef={firstNameRef}
				parentLastNameRef={lastNameRef}
				parentFormSubmitPassedRef={handleFormChildPassedRefSubmit}
			/>
			<br/>
			<h4>2nd Example - Pass the values to function prop</h4>
			<FormChildPassValuesToFunctionPropComponent
				childPassValuesSubmit={handleFormChildPassedValues}
			/>
		</div>
	)

}


export default FormParentComponent
