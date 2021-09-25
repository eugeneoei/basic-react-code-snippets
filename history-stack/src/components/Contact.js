import React from 'react'
import { useHistory } from 'react-router-dom'

const Contact = () => {

	const history = useHistory()

	const handleGoBack = () => {
		history.goBack()
	}

	return (
		<div>
			<h4>Contact Page</h4>
			<p>This is a contact page. You can contact me @ 999!</p>
			<button
				className='btn btn-primary'
				onClick={handleGoBack}
			>
				Go back using <strong>history.goBack</strong>
			</button>
		</div>
	)
}

export default Contact
