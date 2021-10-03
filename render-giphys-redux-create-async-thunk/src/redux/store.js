import { configureStore } from '@reduxjs/toolkit'
import { counterReducer } from './counter/counterSlice'
import { giphyReducer } from './giphy/giphySlice'
import { favouritesReducer } from './favourites/favouritesSlice'

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		giphy: giphyReducer,
		favourites: favouritesReducer
	}
})