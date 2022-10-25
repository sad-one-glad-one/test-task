const defaultState = {
	data: [],
	errors: [],
	isLoading: true
}

const FETCH_DATA = "FETCH_DATA"
const SET_ERRORS = "SET_ERRORS"
const TOGGLE_IS_LOADING = "TOGGLE_IS_LOADING"

export const dataReducer = (state = defaultState, action) => {
	switch (action.type) {
		case FETCH_DATA:
			return {...state, data: [...state.data, ...action.payload]}
		case SET_ERRORS:
			return {...state, errors: [...state.errors, ...action.payload]}
		case TOGGLE_IS_LOADING:
			return {...state, isLoading: state.action}
		
		default:
			return state
	}
}

export const fetchDataAction = (payload) => ({type: FETCH_DATA, payload})
export const setErrorsAction = (payload) => ({type: SET_ERRORS, payload})
export const toggleIsLoadingAction = (payload) => ({type: TOGGLE_IS_LOADING, payload})