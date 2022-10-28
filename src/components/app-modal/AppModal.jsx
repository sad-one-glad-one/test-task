import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModalAction } from '../../store/ModalReducer';
import "./index.scss"

const AppModal = ({children}) => {
	const dispath = useDispatch()
	let isOpen = useSelector(state => state.modal.modalState.isOpen)

	return (
		<div 
			className={`app-modal ${isOpen ? 'app-modal_opened' : ''}`}
			onClick={() => dispath(closeModalAction())}
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