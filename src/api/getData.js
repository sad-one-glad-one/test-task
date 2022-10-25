import { 
	fetchDataAction, 
	setErrorsAction, 
	toggleIsLoadingAction 
} from "../store/DataReducer"

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
			})
			.catch((error) => {
				dispatch(setErrorsAction(error))
			})
			.finally(() => {
        dispatch(toggleIsLoadingAction(false))
      })
	}
}