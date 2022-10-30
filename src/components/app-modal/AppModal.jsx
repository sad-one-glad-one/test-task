import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addToBasketAction } from "../../store/BasketReducer"
import { closeModalAction } from "../../store/ModalReducer"
import AppButton from "../app-button/AppButton"
import AppText from "../app-text/AppText"
import SelectsList from "../selects-list/SelectsList"
import "./index.scss"

const AppModal = () => {
  const dispatch = useDispatch()
  let isOpen = useSelector((state) => state.modal.modalState.isOpen)
  let modalData = useSelector((state) => state.modal.modalState.modalData)

  const [selectedPeriodOption, setSelectedPeriodOption] = useState("Ежедневно")
  const [selectedDailyOption, setSelectedDailyOption] = useState(1)
  const [selectedMultiOptions, setSelectedMultiOptions] = useState([
    { time: "11:00", dosage: "1 таблетка", id: Date.now() + 10 },
  ])

  const handleSendToBasket = () => {
    let sendData = {
      rules: {
        period: selectedPeriodOption,
        daily: selectedDailyOption,
        multi: selectedMultiOptions,
      },
      item: { ...modalData },
    }
    dispatch(addToBasketAction(sendData))
    dispatch(closeModalAction())
    resetInputsValue()
  }

  const resetInputsValue = () => {
    setSelectedPeriodOption("Ежедневно")
    setSelectedDailyOption(1)
    setSelectedMultiOptions([
      { time: "11:00", dosage: "1 таблетка", id: Date.now() + 10 },
    ])
  }

  return (
    <div
      className={`app-modal ${isOpen ? "app-modal_opened" : ""}`}
      onClick={() => dispatch(closeModalAction())}
    >
      <div
        className={`app-modal__content ${isOpen ? "app-modal_opened" : ""}`}
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
              text={`${selectedDailyOption} приём${
                selectedDailyOption > 1 ? "a" : ""
              }: ${selectedMultiOptions.map(
                (item) => ` ${item.time} ${item.dosage[0]} шт`
              )}`}
              fontSize={14}
              lineHeight={24}
            />
          </div>
        </div>
        <div className="app-modal__body">
          <SelectsList
            periodSelected={selectedPeriodOption}
            setPeriodSelected={setSelectedPeriodOption}
            dailySelected={selectedDailyOption}
            setDailySelected={setSelectedDailyOption}
            multiSelected={selectedMultiOptions}
            setMultiSelected={setSelectedMultiOptions}
          />
          <div className="app-modal__body-btn">
            <AppButton
              text="Добавить в курс"
              onClick={() => handleSendToBasket()}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppModal
