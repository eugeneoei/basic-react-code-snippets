import axios from 'axios'

const getGiphy = async (type, query) => {
	try {
		const response = await axios.get(
			`${process.env.REACT_APP_API}/${type}?api_key=${process.env.REACT_APP_API_KEY}${query ? `&q=${query}` : ''}`
		)
		const data = response.data.data
		if (type === 'random') {
			return data
		} else {
			return {
				id: data[0]['id'],
				image_url: data[0]['images']['original']['url'],
				title: data[0]['title']
			}
		}
	} catch (error) {
		console.log(error)
	}
}

export {
	getGiphy
}