import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { updateCounter } from '../counter/counterSlice'

// https://redux-toolkit.js.org/api/createAsyncThunk#payloadcreator
export const fetchGiphy = createAsyncThunk(
	'giphy/fetchGiphy',
	async (
		payload,
		// second argument in callback is known as thunkAPI which is an object with various options
		{
			dispatch,
			rejectWithValue
		}
	) => {
		try {
			const response = await axios.get(
				`${process.env.REACT_APP_API}/${payload.type}?api_key=${process.env.REACT_APP_API_KEY}${payload.query ? `&q=${payload.query}` : ''}`
			)
			const data = response.data.data
			dispatch(updateCounter())
			if (payload.type === 'random') {
				return {
					id: data.id,
					src: data.fixed_width_downsampled_url,
					title: data.title
				}
			} else {
				return {
					id: data[0]['id'],
					src: data[0]['images']['original']['url'],
					title: data[0]['title']
				}
			}
		} catch (error) {
			console.log(error.response.data)
			return rejectWithValue(error.response.data)
		}
	}
)