import React, { useState } from "react"
import { useEffect } from "react"
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

  const [titleCounter, setTitleCounter] = useState("")
  const [sendData, setSendData] = useState({})
  const [shouldResetValues, setShouldResetValues] = useState(false)

  const updateSendData = (data, title) => {
    setTitleCounter(title)
    setSendData(data)
  }

  const handleSendDataToBasket = () => {
    dispatch(addToBasketAction(sendData))
    dispatch(closeModalAction())
    setShouldResetValues(true)
  }

  useEffect(() => {
    let defaultData = {
      id: Date.now(),
      rules: {
        period: "Ежедневно",
        daily: 1,
        multi: [{ time: "11:00", dosage: "1 таблетка", id: Date.now() + 10 }],
      },
      item: modalData,
    }
    setSendData(defaultData)
  }, [isOpen])

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
            <AppText text={titleCounter} fontSize={14} lineHeight={24} />
          </div>
        </div>
        <div className="app-modal__body">
          <SelectsList
            isFromModal={true}
            updateSendData={updateSendData}
            shouldResetValues={shouldResetValues}
            setShouldResetValues={setShouldResetValues}
          />
          <div className="app-modal__body-btn">
            <AppButton
              text="Добавить в курс"
              onClick={() => handleSendDataToBasket()}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppModal
