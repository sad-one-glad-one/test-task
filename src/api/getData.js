import { 
	fetchDataAction, 
	setErrorsAction, 
	toggleIsLoadingAction 
} from "../store/ApiDataReducer"
import { copyApiDataAction } from "../store/LocalDataReducer"

const url = "https://api.vitamin.trade/SupplementsList"

export const getData = () => {
	return function(dispatch) {
		fetch(url, {
			headers: {
				accept: "application/json",
				Authorization: "ers45bsGH^)()Hhj"
			},
  		method: "GET"
		})
			.then(res => res.json())
			.then (response => {
				dispatch(fetchDataAction(response.SupplementsList))
				dispatch(copyApiDataAction(response.SupplementsList))
			})
			.catch((error) => {
				dispatch(setErrorsAction(error))
			})
			.finally(() => {
        dispatch(toggleIsLoadingAction(false))
      })
	}
}