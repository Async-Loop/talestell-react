import { createSlice, isAnyOf } from '@reduxjs/toolkit';
const SIGN_IN_FAILURE = 'SIGN_IN_FAILURE, SIGN_OUT_FAILURE, SIGN_UP_FAILURE';
const SIGN_OUT_FAILURE = 'SIGN_IN_FAILURE, SIGN_OUT_FAILURE, SIGN_UP_FAILURE';
const SIGN_UP_FAILURE = 'SIGN_IN_FAILURE, SIGN_OUT_FAILURE, SIGN_UP_FAILURE';

const initialUser = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;

const userSlice = createSlice({
	name: 'user',
	initialState: {
		user: initialUser
	},
	reducers: {
		SIGN_IN_SUCCESS: (state, action) => {
			state.user = action.payload;
			localStorage.setItem('user', JSON.stringify(action.payload));
		},
		SIGN_OUT_SUCCESS: (state) => {
			state.user = null;
			localStorage.removeItem('user');
		}
	},
	extraReducers: (builder) => {
		builder.addMatcher(
			isAnyOf(SIGN_IN_FAILURE, SIGN_OUT_FAILURE, SIGN_UP_FAILURE),
			(state, action) => ({
				...state,
				error: action.payload
			})
		);
	}
});
export default userSlice.reducer;

// Actions
const { SIGN_IN_SUCCESS, SIGN_OUT_SUCCESS } = userSlice.actions;

export const login =
	({ username }) =>
	async (dispatch) => {
		try {
			dispatch(SIGN_IN_SUCCESS({ username }));
		} catch (e) {
			return console.error(e.message);
		}
	};

export const logout = () => async (dispatch) => {
	try {
		return dispatch(SIGN_OUT_SUCCESS());
	} catch (e) {
		return console.error(e.message);
	}
};
