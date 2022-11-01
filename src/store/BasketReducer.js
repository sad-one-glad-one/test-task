const defaultState = {
  basketData: [],
}

const ADD_TO_BASKET = "ADD_TO_BASKET"
const UPDATE_BASKET = "UPDATE_BASKET"
const REMOVE_FROM_BASKET = "REMOVE_FROM_BASKET"

export const basketReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TO_BASKET:
      return { ...state, basketData: [...state.basketData, action.payload] }
    case UPDATE_BASKET:
      const itemIndex = state.basketData.findIndex(
        (el) => el.id === action.payload.id
      )
      const updateBasketValue = [
        ...state.basketData.slice(0, itemIndex),
        action.payload,
        ...state.basketData.slice(itemIndex + 1),
      ]
      return { ...state, basketData: [...updateBasketValue] }
    default:
      return state
  }
}

export const addToBasketAction = (payload) => ({ type: ADD_TO_BASKET, payload })
export const updateBasketAction = (payload) => ({
  type: UPDATE_BASKET,
  payload,
})
export const removeFromBasketAction = (payload) => ({
  type: REMOVE_FROM_BASKET,
  payload,
})
