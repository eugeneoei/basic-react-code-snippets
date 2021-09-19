import React, { useState } from 'react'
import Counter from './Counter'

const MainCounter = () => {

	const [resetCount, setResetCount] = useState(0)

	const handleResetAllCounters = () => {
		setResetCount(resetCount + 1)
	}

	return (
		<>
			<div className='container'>
				<div className='row'>
					<div className='col-12'>
						<h3>Main Counter</h3>
						<p>All counters have been reset {resetCount} time(s).</p>
					</div>
					<div>
					</div>
				</div>
			</div>
			<div className='container'>
				<div className='row'>
					<div className='col-xs-12 col-sm-4'>
						<Counter 
							name={'Counter 1'}
							resetCount={resetCount}
							resetAllCounters={handleResetAllCounters}
						/>
					</div>
					<div className='col-xs-12 col-sm-4'>
						<Counter 
							name={'Counter 2'}
							resetCount={resetCount}
							resetAllCounters={handleResetAllCounters}
						/>
					</div>
					<div className='col-xs-12 col-sm-4'>
						<Counter 
							name={'Counter 3'}
							resetCount={resetCount}
							resetAllCounters={handleResetAllCounters}
						/>
					</div>
				</div>
			</div>
		</>
	)
}

export default MainCounter