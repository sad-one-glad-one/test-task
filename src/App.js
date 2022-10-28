import React, { useEffect, useState } from "react";
import "./reset.scss";
import "./index.scss";
import AppSidebar from "./components/app-sidebar/AppSidebar";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "./api/getData";
import DataTable from "./components/data-table/DataTable";
import AppText from "./components/app-text/AppText";
import { AppIcon } from './components/app-icon/AppIcon';
import { sortData } from "./store/LocalDataReducer";
import AppModal from "./components/app-modal/AppModal"

function App() {
	const isLoading = useSelector(state => state.fromApi.isLoading)
	const apiData = useSelector(state => state.fromApi.data)
	const basketData = useSelector(state => state.basket.basketData)
	const dispatch = useDispatch()

	const [navbar] = useState([
		{ name: "Anti-age", icon: "icon-anti-age"},
		{ name: "Антистресс", icon: "icon-antistress"},
		{ name: "Антиоксиданты", icon: "icon-antioxydants"},
		{ name: "Женское здоровье", icon: "icon-female-health"},
		{ name: "Здоровый сон", icon: "icon-sleep"},
		{ name: "Кожа, волосы, ногти", icon: "icon-skin"},
		{ name: "Крепкий иммунитет", icon: "icon-immunity"},
		{ name: "Мужское здоровье", icon: "icon-male-health"},
		{ name: "Омега, жирные кислоты", icon: "icon-omega"},
		{ name: "Память и внимание", icon: "icon-memory"},
		{ name: "Похудение и стройность", icon: "icon-slimming-down"},
		{ name: "Спокойствие и фокус", icon: "icon-calmness"},
		{ name: "Суставы и связки", icon: "icon-joints"}
	])
	const [isNavbarShort, setIsNavbarShort] = useState(false)
	const [isBasketShort, setIsBasketShort] = useState(false)

	const sortArr = (type) => {
		let sortedData = apiData.filter(eachVal => {
			let currentVal = eachVal.Purposes.some(
				({ Purpose }) => Purpose === type)
			return currentVal
		})
		dispatch(sortData(sortedData))
	}
	const restoreArr = () => {
		dispatch(sortData(apiData))
	}

	useEffect(() => {
		dispatch(getData())
	}, [])

  return (
		<div>
			{isLoading ? 
				<div>Loading...</div>
				:
				<div className="app" style={{display:'flex', justifyContent: 'space-between', gridColumnGap: '8px'}}>
					<AppSidebar isShort={isNavbarShort} setIsShort={setIsNavbarShort}>
						<nav className={`navbar-body ${isNavbarShort ? "navbar-body_short" : "navbar-body_long"}`}>
							<header
								className="navbar-body__title navbar-body__title_active"
								onClick={() => restoreArr()}
							>
								<AppText text="Каталог" fontWeight={500} lineHeight={16} />
							</header>
							<ul className={`navbar-body__list `}>
								{navbar.map((item) => (
									<li
										className="navbar-body__list-item" 
										key={item.name}
										onClick={() => sortArr(item.name)}
									>
										{!isNavbarShort ?
											<AppText text={item.name} />
											:
											<div className="icon-wrap align-center">
												{/* TODO: обдумать что делать с hover'ом и иконками */}
												<AppIcon
													name={item.icon}
													width="24" 
													height="24" 
													color="rgba(0, 0, 0, 0.87)"
												/>
											</div>
										}
									</li>
								))}
							</ul>
							{!isNavbarShort &&
								<div>
									<header className="navbar-body__title">
										<AppText text="Нутрицилоги" fontWeight={500} lineHeight={16} />
									</header>
									<ul className="navbar-body__list">
									</ul>
									<header className="navbar-body__title">
										<AppText text="Документы" fontWeight={500} lineHeight={16} />
									</header>
									<ul className="navbar-body__list">
									</ul>
								</div>
							} 
						</nav>
					</AppSidebar>
					<DataTable />
					<AppSidebar isShort={isBasketShort} setIsShort={setIsBasketShort} isRight={true}>
						<div className="basketbar-body_short">
							{isBasketShort ? 
								basketData?.map((item, i) => (
									<div className="basketbar-body__item" key={i}>
										<div className="align-center img-wrap">
											<img
												src={item.item?.Picture}
												alt="mini image"
												draggable={false}
												/>
										</div>
										<AppText text={item.item?.GoodsCommercialName} />
									</div>
								))
								:
								<div>
								</div>
							}
						</div>
					</AppSidebar>
					<AppModal />
				</div>
			}
		</div>
  );
}

export default App;
