const defaultState = {
	data: [],
}

const COPY_API_DATA = "COPY_API_DATA"
const SORT_DATA = "SORT_DATA"

export const localDataReducer = (state = defaultState, action) => {
	switch (action.type) {
		case COPY_API_DATA:
			return {...state, data: [...state.data, ...action.payload]}
		case SORT_DATA:
			return {...state, data: [...action.payload]}
		
		default:
			return state
	}
}

export const copyApiDataAction = (payload) => ({type: COPY_API_DATA, payload})
export const sortData = (payload) => ({type: SORT_DATA, payload})