import React from 'react'
import { useHistory } from 'react-router-dom'

const About = () => {

	const history = useHistory()

	const handleRouteToContactPage = () => {
		history.replace('/contact')
	}

	return (
		<div>
			<h4>About Page</h4>
			<p>This is an about page. You can read more about me here!</p>
			<button
				className='btn btn-primary'
				onClick={handleRouteToContactPage}
			>
				Go to Contact Page using <strong>history.replace</strong>
			</button>
		</div>
	)
}

export default About
