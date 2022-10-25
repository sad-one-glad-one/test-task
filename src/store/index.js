import { createStore, combineReducers, applyMiddleware } from "redux"
import { dataReducer } from "./DataReducer"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"

const rootReducer = combineReducers({
	fromApi: dataReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
