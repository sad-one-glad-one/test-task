import { createStore, combineReducers, applyMiddleware } from "redux"
import { apiDataReducer } from "./ApiDataReducer"
import { localDataReducer } from "./LocalDataReducer"
import { modalReducer } from "./ModalReducer"
import { basketReducer } from "./BasketReducer"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"

const rootReducer = combineReducers({
	fromApi: apiDataReducer,
	fromStore: localDataReducer,
	modal: modalReducer,
	basket: basketReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
