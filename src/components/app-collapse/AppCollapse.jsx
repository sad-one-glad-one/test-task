import React, { useState, useRef } from 'react';
import { AppIcon } from '../app-icon/AppIcon';
import AppText from '../app-text/AppText';
import "./index.scss"

const AppCollapse = ({children}) => {
	const [isOpen, setIsOpen] = useState(false)
	const handleEvent = () => {
		setIsOpen(!isOpen)
	}

	const collapseBodyRef = useRef()

	return (
		<div className="app-collapse" onClick={()=>handleEvent()}>
			<div className="app-collapse__header">
				<div className="app-collapse__header-inner app-collapse__header-inner_left">
					<div className="app-collapse__header-chevron">
						<AppIcon
							name="icon-chevron-up" 
							width="24" 
							height="24" 
							color="rgba(0, 0, 0, 0.87)"
						/>
					</div>
					<AppText 
						text="Ежедневно в 19:00" 
						lineHeight={24} 
						fontWeight={500} 
					/>
				</div>
				<div className="app-collapse__header-inner app-collapse__header-inner_right">
					<AppText 
						text="5 шт: Гидрокситриптофан (5-htp), Цинк + В6, Мультиви..." 
						fontSize={14}
						lineHeight={24} 
					/>
					<AppIcon 
						name="icon-trash" 
						width="24" 
						height="24" 
						color="#A61911"
					/>
				</div>
			</div>
			<div 
				className="app-collapse__body" 
				ref={collapseBodyRef}
				style={
					isOpen 
						? {
							height: collapseBodyRef.current.scrollHeight + "px"
							}
						: {
							height: "0px"
							}
				}
			>
				{children}
			</div>
		</div>
	);
};

export default AppCollapse;