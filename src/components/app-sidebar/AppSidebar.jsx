import React, { useState } from 'react';
import { AppIcon } from '../app-icon/AppIcon';
import "./index.scss"
import Logo from "./logo.png"

const AppSidebar = ({children}) => {
	const [isShort, setIsShort] = useState(false)

	return (
		<div className={`app-sidebar ${isShort ? 'app-sidebar_short' : 'app-sidebar_long'}`}>
			<div className="app-sidebar__head">
				<div className="app-sidebar__head-inner">
					<div className="app-sidebar__head-logo">
						<img src={Logo} alt="Logo" draggable={false} />
					</div>
					<button
						className="app-sidebar__head-btn align-center"
						onClick={() => setIsShort(!isShort)}
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
			<div className="app-sidebar__body">
				{children}
			</div>
		</div>
	);
};

export default AppSidebar;