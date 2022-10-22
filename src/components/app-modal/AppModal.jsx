import React from 'react';

const AppModal = ({isOpen, setIsOpen}) => {
	return (
		<div>
			{isOpen? <h1>modal</h1> : ''}
		</div>
	);
};

export default AppModal;