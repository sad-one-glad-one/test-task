import React from 'react';
import "./index.scss"

const AppModal = ({isOpen, setIsOpen, children}) => {
	return (
		<div 
			className={`app-modal ${isOpen ? 'app-modal_opened' : ''}`}
			onClick={() => setIsOpen(false)}
		>
			<div 
				className={`app-modal__content ${isOpen ? 'app-modal_opened' : ''}`}
				onClick={(e) => e.stopPropagation()}
			>
				{children}
			</div>
		</div>
	);
};

export default AppModal;