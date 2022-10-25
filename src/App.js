import React, { useEffect } from "react";
import "./reset.scss";
import AppSidebar from "./components/app-sidebar/AppSidebar";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "./api/getData";
import DataTable from "./components/app-table/DataTable";

function App() {
	const isLoading = useSelector(state => state.fromApi.isLoading)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getData())
	}, [])

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
					<DataTable />
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
