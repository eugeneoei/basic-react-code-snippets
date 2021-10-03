import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	value: 0
}

export const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		updateCounter: (state, action) => {
			state.value += 1
		}
	}
})

export const { updateCounter } = counterSlice.actions

export const counterReducer = counterSlice.reducer