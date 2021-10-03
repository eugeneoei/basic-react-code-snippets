# Render Giphys Homework Implemented with React-Redux-createAsyncThunk

This is an approach to w16d2 Render Giphys Homework but with `redux` and `createAsyncThunk`.

Majority of the implementations are similar to the code snippets in [render-giphys](https://git.generalassemb.ly/SG-SEIF-6/basic-react-code-snippets/tree/master/render-giphys).

The main differences between the 2 are:

- using `createAsyncThunk` to handle asynchronous calls
- storing states of **giphy** and **favourties** in `redux` store
- added a `Counter` component to track the number of times the API is called where the `action` to update the value of `counter` is dispatched within `createAsyncThunk`

# Handle `rejected` API Calls

In Zhiquan's demo, the handling of API promises are implemented within `extraReducers` like this:

```js
const userSlice = createSlice({
	name: "user",
	initialState: {
		result: null,
		loading: true,
		error: null
	},
	reducers: {
		setErrorInput: (previousState, action) => {
			previousState.error = action.payload;
		}
	},
	extraReducers: (builder) => {
		builder.addCase(setUser.fulfilled, (previousState, action) => {
			previousState.result = action.payload;
			previousState.loading = false;
			previousState.error = null;
		});
		builder.addCase(setUser.pending, (previousState, action) => {
			previousState.result = null;
			previousState.loading = true;
			previousState.error = null;
		});
		builder.addCase(setUser.rejected, (previousState, action) => {
			previousState.result = null;
			previousState.loading = false;
			previousState.error = "Failed to fetch the user";
		});
	}
});
```

where its `loading` and `error` states are structured within the `redux` store as well.

If you feel there isn't a need to store these information in the `redux` store but within the component itself, a possible implementation would be something like this:

```js
// src/redux/giphy/giphySlice.js
export const giphySlice = createSlice({
	name: 'giphy',
	initialState,
	reducers: {
		setGiphy: (state, action) => {
			state.giphy = action.payload
		}
	},
	extraReducers: builder => {
		builder.addCase(fetchGiphy.fulfilled, (state, action) => {
			state.giphy = action.payload
			state.giphys.push(action.payload)
		})
	}
})
.
.
.
```

Note that only `fulfilled` is handled within `extraReducers` since the handling of loading and error states is done within the `Giphy` component.

```js
// src/components/giphy/Giphy.js
.
.
.
const [isGettingGiphy, setIsGettingGiphy] = useState(true)
const [fetchGiphyErrorMessage, setFetchGiphyErrorMessage] = useState(null)
.
.
.
const handleFetchNewGiphy = useCallback(
	async payload => {
		setIsGettingGiphy(true)
		setFetchGiphyErrorMessage(null)
		try {
			await dispatch(fetchGiphy(payload)).unwrap()
		} catch (error) {
			setFetchGiphyErrorMessage(error.message)
		}
		setIsGettingGiphy(false)
	}, [
		dispatch
	]
)
.
.
.
```

Note the use of `unwrap()` after dispatching `fetchGiphy`. It is necessary to call `unwrap`...

> to extract the `payload` of a `fulfilled` action or to throw either the `error` or, if available, `payload` created by `rejectWithValue` from a `rejected` action.

In this case, when `fetchGiphy` action is rejected, the error will be caught within the `catch` block. You can read more about `unwrap` [here](https://redux-toolkit.js.org/api/createAsyncThunk#unwrapping-result-actions).

# Updating a `slice` of `redux` store within `createAsyncThunk`

Depending on how your `redux` store is structured, you might want to update another slice of your store after the asynchronous API call is completed. If this is the case, you can do so within `createAsyncThunk`.

```js
export const fetchGiphy = createAsyncThunk(
	'giphy/fetchGiphy',
	async (
		payload,
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
```

The second argument of `createAsyncThunk` is known as the `payloadCreator`.

A `payloadCreator` is:

> A callback function that should return a promise containing the result of some asynchronous logic....

The second argument in the `payloadCreator` is known as the `thunkAPI` which is an object containing all of the parameters that are normally passed to a Redux thunk function, as well as additional options.

The additional options include:

- dispatch
- getState
- extra
- requestId
- signal
- rejectWithValue(value, [meta])
- fulfillWithValue(value, meta)

You may read more about `payloadCreator` [here](https://redux-toolkit.js.org/api/createAsyncThunk#payloadcreator).

In this example, notice `thunkAPI` is destructured and the action `updateCounter` is dispatched after asynchronous API call is completed where a `counter` value tracks the number of times the giphy API is called.

# Running this `react` app

- Create a `env` file `.env.development.local` in the root folder and add the following to the `env` file:

```bash
REACT_APP_API=https://api.giphy.com/v1/gifs
REACT_APP_API_KEY=yourgiphyapikey
```
- Replace "yourgiphyapikey" with your own API key
- `npm install`
- `npm start`
