import React, {useEffect, useState} from "react";
import "./reset.scss";
import AppText from "./components/app-text/AppText";
import AppSidebar from "./components/app-sidebar/AppSidebar";

function App() {
	const url = "https://api.vitamin.trade/SupplementsList"
	const [apiData, setApiData] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		fetch(url, {
			headers: {
				accept: "application/json",
				Authorization: "ers45bsGH^)()Hhj"
			},
  		method: "GET"
		})
			.then(res => res.json())
			.then (response => setApiData(response.SupplementsList))
			.catch((err) => {
				setError(err.message)
				alert(error)
				setApiData(null)
			})
			.finally(() => {
        setIsLoading(false)
      })
	})

  return (
		<div>
			{isLoading ? 
				<div>Loading...</div> 
				:
				<div className="app" style={{display:'flex', justifyContent: 'space-between', gridColumnGap: '8px'}}>
					<AppSidebar>
						Somebody once told me the world is gonna roll me<br/>
						I ain't the sharpest tool in the shed<br/>
						She was looking kind of d*mb with her finger and her thumb<br/>
						In the shape of an L on her forehead
					</AppSidebar>
					<div>
						{apiData.map((item) => (
							<div key={item.GoodsCommercialName}>
								<AppText
									text={item.GoodsCommercialName}
								/>
							</div>
						))}
					</div>
					<AppSidebar isRight={true}>
						Somebody once told me the world is gonna roll me<br/>
						I ain't the sharpest tool in the shed<br/>
						She was looking kind of d*mb with her finger and her thumb<br/>
						In the shape of an L on her forehead
					</AppSidebar>
				</div>
			}
		</div>
  );
}

export default App;
