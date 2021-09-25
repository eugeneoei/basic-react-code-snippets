import { Route, Switch } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import './App.css'

const App = () => {
	return (
		<div className='app'>
			<h1 className='mb-4'>
				React History Stack
			</h1>
			<Router>
				<Navbar />
				<hr />
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route exact path='/about'>
						<About />
					</Route>
					<Route exact path='/contact'>
						<Contact />
					</Route>
				</Switch>
			</Router>
		</div>
	)
}

export default App
