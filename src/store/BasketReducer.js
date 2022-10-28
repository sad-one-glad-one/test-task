const defaultState = {
	basketData: []
}

const ADD_TO_BASKET = "ADD_TO_BASKET"
const REMOVE_FROM_BASKET = "REMOVE_FROM_BASKET"

export const basketReducer = (state = defaultState, action) => {
	switch (action.type) {
		case ADD_TO_BASKET:
			return {...state, basketData: [...state.basketData, ...action.payload]}
		
		default:
			return state
	}
}

export const addToBasketAction = (payload) => ({type: ADD_TO_BASKET, payload})
export const removeFromBasketAction = (payload) => ({type: REMOVE_FROM_BASKET, payload})