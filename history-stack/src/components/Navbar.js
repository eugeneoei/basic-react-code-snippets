import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {	
	
	return (
		<div className='my-4'>
			<Link to='/' className='d-inline-block mx-2'>
				Home
			</Link>
			<Link to='/about' className='d-inline-block mx-2'>
				About
			</Link>
			<Link to='/contact' className='d-inline-block mx-2'>
				Contact
			</Link>
		</div>
	)
}

export default Navbar
