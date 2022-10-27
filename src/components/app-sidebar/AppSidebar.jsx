import React, { useState } from 'react';
import { AppIcon } from '../app-icon/AppIcon';
import AppSelect from '../app-select/AppSelect';
import AppText from '../app-text/AppText';
import "./index.scss"
import Logo from "./logo.png"

const AppSidebar = ({ isShort, setIsShort, isRight, children }) => {
	const toggleSidebar = () => {
		setIsShort(!isShort)
	}
	let appSidebar = isRight && isShort ? "app-sidebar-right app-sidebar-right_short" 
												: isRight && !isShort ? "app-sidebar-right app-sidebar-right_long" 
													: !isRight && isShort ? "app-sidebar app-sidebar_short"
														: "app-sidebar app-sidebar_long"

	const selectOptions = [
		{name: '4 недели'},
		{name: '3 недели'},
		{name: '2 недели'},
	]
	const [selectedOption, setSelectedOption] = useState('4 недели')

	return (
		<aside className={appSidebar}>
			{!isRight ?
				<div className="app-sidebar__head">
					<div className="app-sidebar__head-inner">
						<div className="app-sidebar__head-logo">
							<img src={Logo} alt="Logo" draggable={false} />
						</div>
						<button
							className="app-sidebar__head-btn align-center"
							onClick={() => toggleSidebar()}
						>
							<AppIcon 
								name="icon-menu"
								width="24"
								height="24"
								color="rgba(0, 0, 0, 0.87)"
							/>
						</button>
					</div>
				</div>
			:
				<div className="app-sidebar-right__head">
					<button 
						className="app-sidebar-right__head-btn"
						onClick={() => toggleSidebar()}
					>
						<div className={`app-sidebar-right__head-btn-icon align-center ${isShort && "app-sidebar-right__head-btn-icon_flipped"}`}>
							<AppIcon 
									name="icon-chevron-up"
									width="24"
									height="24"
									color="rgba(0, 0, 0, 0.87)"
								/>
						</div>
						<AppText 
							text="Мой курс приёма" 
							fontSize={22}
							lineHeight={26}
							fontWeight={500}
						/>
					</button>
					<div className={`app-sidebar-right__head-params ${isShort ? "display-none" : ""}`}>
						<AppSelect 
							options={selectOptions} 
							selectedOption={selectedOption} 
							setSelectedOption={setSelectedOption} 
						/>
						<button
							className="head-params__btn"
							onClick={() => alert("Свернуть все")}
						>
							<AppText
								text="Свернуть все"
								lineHeight={24}
								color="#2662C9"
							/>
						</button>
						</div>
				</div>
			}
			<div className="app-sidebar__body">
				{children}
			</div>
		</aside>
	);
};

export default AppSidebar;