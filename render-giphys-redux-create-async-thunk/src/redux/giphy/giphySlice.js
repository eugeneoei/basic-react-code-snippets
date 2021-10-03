import { createSlice } from '@reduxjs/toolkit'
import { fetchGiphy } from './giphyService'

const initialState = {
	giphy: null,
	giphys: []
}

export const giphySlice = createSlice({
	name: 'giphy',
	initialState,
	reducers: {
		setGiphy: (state, action) => {
			state.giphy = action.payload
		}
	},
	extraReducers: builder => {
		// handling only fulfilled promise
		// loading and error handled within Giphy.js component
		builder.addCase(fetchGiphy.fulfilled, (state, action) => {
			state.giphy = action.payload
			state.giphys.push(action.payload)
		})
	}
})

export const { setGiphy } = giphySlice.actions

export const giphyReducer = giphySlice.reducer
