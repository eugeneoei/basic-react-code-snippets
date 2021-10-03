import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	entities: []
}

export const favouritesSlice = createSlice({
	name: 'favourites',
	initialState,
	reducers: {
		addToFavourite: (state, action) => {
			state.entities.push(action.payload)
		},
		removeFromFavourite: (state, action) => {
			state.entities = state.entities.filter(favourite => favourite.id !== action.payload)
		}
	}
})

export const { addToFavourite, removeFromFavourite } = favouritesSlice.actions

export const favouritesReducer = favouritesSlice.reducer