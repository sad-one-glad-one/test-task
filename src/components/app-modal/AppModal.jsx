import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToBasketAction } from '../../store/BasketReducer';
import { closeModalAction } from '../../store/ModalReducer';
import AppButton from '../app-button/AppButton';
import { AppIcon } from '../app-icon/AppIcon';
import AppSelect from '../app-select/AppSelect';
import AppText from '../app-text/AppText';
import "./index.scss"

const AppModal = () => {
	const dispatch = useDispatch()
	let isOpen = useSelector(state => state.modal.modalState.isOpen)
	let modalData = useSelector(state => state.modal.modalState.modalData)

	const selectPeriodOptions = [
		{name: "Ежедневно"},
		{name: "Через день"},
		{name: "Еженедельно"},
		{name: "Ежемесячно"}
	]
	const [selectedPeriodOption, setSelectedPeriodOption] = useState("Ежедневно")
	const selectDailyOptions = [
		{name: 1},
		{name: 2},
		{name: 3},
		{name: 4},
		{name: 5}
	]
	const [selectedDailyOption, setSelectedDailyOption] = useState(1)

	const selectTimeOptions = [
		{name: '11:00'},
	]
	const [selectedTimeOption, setSelectedTimeOption] = useState("11:00")
	const selectDosageOptions = [
		{name: "1 таблетка"},
		{name: "2 таблетки"},
		{name: "3 таблетки"},
		{name: "0.5 таблетки"},
	]
	const [selectedDosageOption, setSelectedDosageOption] = useState("1 таблетка")

	const handleSendToBasket = () => {
		let sendData = {
			rules: {
				period: selectedPeriodOption,
				daily: selectedDailyOption,
				time: selectedTimeOption,
				dosage: selectedDosageOption
			},
			item: {...modalData}
		}
		dispatch(addToBasketAction(sendData))
		dispatch(closeModalAction())
		resetInputsValue()
	}

	const resetInputsValue = () => {
		setSelectedPeriodOption("Ежедневно")
		setSelectedDailyOption(1)
		setSelectedTimeOption("11:00")
		setSelectedDosageOption("1 таблетка")
	}

	return (
		<div 
			className={`app-modal ${isOpen ? 'app-modal_opened' : ''}`}
			onClick={() => dispatch(closeModalAction())}
		>
			<div 
				className={`app-modal__content ${isOpen ? 'app-modal_opened' : ''}`}
				onClick={(e) => e.stopPropagation()}
			>
				<div className="app-modal__header">
					<div className="app-modal__header-name">
						<div className="align-center img-wrap">
							<img src={modalData?.Picture} alt="mini image" />
						</div>
						<AppText
							text={modalData?.GoodsCommercialName}
							fontWeight={500}
							lineHeight={24}
						/>
					</div>
					<div className="app-modal__header-counter">
						<AppText
							text={`${selectedDailyOption} приём: 11:00 ${selectedDosageOption}`}
							fontSize={14}
							lineHeight={24}
						/>
					</div>
				</div>
				<div className="app-modal__body">
					<div className="app-modal__body-inputs">
						<div className="app-modal__body-inputs_stable">
							<AppSelect
								label="Как принимать?"
								options={selectPeriodOptions} 
								selectedOption={selectedPeriodOption} 
								setSelectedOption={setSelectedPeriodOption} 
							/>
							<AppSelect
								label="Сколько раз в день?"
								options={selectDailyOptions} 
								selectedOption={selectedDailyOption} 
								setSelectedOption={setSelectedDailyOption} 
							/>
						</div>
						<div className="app-modal__body-inputs_multiple-wrap">
							{/* TODO: выести в отдельный компонент и добавить таймпикер */}
							<div className="app-modal__body-inputs_multiple">
								<AppSelect
									label="Время"
									options={selectTimeOptions} 
									selectedOption={selectedTimeOption} 
									setSelectedOption={setSelectedTimeOption} 
								/>
								<AppSelect
									label="Дозировка"
									options={selectDosageOptions} 
									selectedOption={selectedDosageOption} 
									setSelectedOption={setSelectedDosageOption} 
								/>
								<div className="cross-btn align-center">
									<AppIcon
										name="icon-cross"
										width="24" 
										height="24" 
										color="rgba(0, 0, 0, 0.16)"
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="app-modal__body-btn">
						<AppButton
							text="Добавить в курс"
							onClick={() => handleSendToBasket()}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AppModal;