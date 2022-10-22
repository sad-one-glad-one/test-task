import React, { useState, useRef } from 'react';
import { AppIcon } from '../app-icon/AppIcon';
import AppText from '../app-text/AppText';
import "./index.scss"

const AppCollapse = ({children}) => {
	const [isOpen, setIsOpen] = useState(false)
	const handleEvent = () => {
		setIsOpen(!isOpen)
	}
	const flippedChevronClass ="app-collapse__header-chevron_flipped"

	const collapseBodyRef = useRef()
	
	const tempText = "5 шт: Гидрокситриптофан (5-htp), Цинк + В6, Мультиви" +
									"5 шт: Гидрокситриптофан (5-htp), Цинк + В6, Мультиви5 шт:"

	return (
		<div className="app-collapse">
			<div className="app-collapse__header" onClick={()=>handleEvent()}>
				<div className="app-collapse__header-inner app-collapse__header-inner_left">
					<div className={`app-collapse__header-chevron align-center ${isOpen ? flippedChevronClass : ""}`}>
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
					<div className="app-collapse__text-wrap">
						<AppText 
							text={tempText} 
							fontSize={14}
							lineHeight={24} 
						/>
					</div>
					<div
						className="align-center"
						onClick={(e) => {
							e.stopPropagation()
							alert('remove')
						}}
					>
						<AppIcon 
							name="icon-trash" 
							width="24" 
							height="24" 
							color="#A61911"
						/>
					</div>
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
				<div className="app-collapse__body-inner">
					{children}
				</div>
			</div>
		</div>
	);
};

export default AppCollapse;