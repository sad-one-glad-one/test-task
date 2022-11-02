import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { updateBasketAction } from "../../store/BasketReducer"
import { AppIcon } from "../app-icon/AppIcon"
import AppSelect from "../app-select/AppSelect"
import "./index.scss"

const SelectsList = ({
  mountedItem,
  isFromModal,
  updateSendData,
  shouldResetValues,
  setShouldResetValues,
}) => {
  const dispatch = useDispatch()
  const basketData = useSelector((state) => state.basket.basketData)
  const periodOptions = [
    { name: "Ежедневно" },
    { name: "Через день" },
    { name: "Еженедельно" },
    { name: "Ежемесячно" },
  ]
  const dailyOptions = [{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }]
  const timeOptions = [{ name: "11:00" }, { name: "12:00" }, { name: "13:00" }]
  const dosageOptions = [
    { name: "1 таблетка" },
    { name: "2 таблетки" },
    { name: "3 таблетки" },
    { name: "4 таблетки" },
  ]
  const [periodSelected, setPeriodSelected] = useState("Ежедневно")
  const [dailySelected, setDailySelected] = useState(1)
  const [multiSelected, setMultiSelected] = useState([
    { time: "11:00", dosage: "1 таблетка", id: Date.now() + 10 },
  ])

  let modalData = useSelector((state) => state.modal.modalState.modalData)

  const resetInputsValue = () => {
    setPeriodSelected("Ежедневно")
    setDailySelected(1)
    setMultiSelected([
      { time: "11:00", dosage: "1 таблетка", id: Date.now() + 10 },
    ])
  }

  useEffect(() => {
    if (isFromModal) {
      let sendData = {
        id: Date.now(),
        rules: {
          period: periodSelected,
          daily: dailySelected,
          multi: multiSelected,
        },
        item: { ...modalData },
      }
      let titleCounter = `${dailySelected} приём${
        dailySelected > 1 ? "a" : ""
      }: ${multiSelected.map((item) => ` ${item.time} ${item.dosage[0]} шт`)}`

      updateSendData(sendData, titleCounter)
    } else if (!isFromModal && isNotFirstIteration) {
      let sendData = {
        id: mountedItem.id,
        test: "tetetete",
        rules: {
          period: periodSelected,
          daily: dailySelected,
          multi: [...multiSelected],
        },
        item: { ...mountedItem.item },
      }
      // FIXME: попадаем в луп перерендера
      // dispatch(updateBasketAction(sendData))
    }
    if (!isNotFirstIteration) setIsNotFirstIteration((pr) => (pr = true))
  }, [periodSelected, dailySelected, multiSelected])

  const [isNotFirstIteration, setIsNotFirstIteration] = useState(false)

  useEffect(() => {
    if (shouldResetValues) {
      setTimeout(() => {
        resetInputsValue()
      }, 500)
      setShouldResetValues(false)
    }
  }, [shouldResetValues])

  let tempMultiState = [...multiSelected]
  // отслеживает необходимость расширения контейнера времени и дозировки
  useEffect(() => {
    if (dailySelected - multiSelected.length >= 1) {
      for (let i = 1; i <= dailySelected - multiSelected.length; i++) {
        tempMultiState.push({
          time: "11:00",
          dosage: "1 таблетка",
          id: Date.now() + i,
        })
      }
      setMultiSelected([...tempMultiState])
    } else if (dailySelected - multiSelected.length < 0) {
      tempMultiState.length = dailySelected
      setMultiSelected([...tempMultiState])
    }
  }, [dailySelected])

  const handleChangeMultiValues = (el, type, value) => {
    setMultiSelected(
      multiSelected.map((item) => {
        if (item === el && type === "time") {
          return { ...item, time: value }
        } else if (item === el && type === "dosage") {
          return { ...item, dosage: value }
        }
        return item
      })
    )
  }

  const handleRemove = (index) => {
    tempMultiState = [...multiSelected]
    tempMultiState.splice(index, 1)
    setMultiSelected([...tempMultiState])
    setDailySelected(dailySelected - 1)
  }

  const [isFirstLoaded, setIsFirstLoaded] = useState(false)
  useEffect(() => {
    if (mountedItem && !isFirstLoaded) {
      setPeriodSelected((prev) => (prev = mountedItem.rules.period))
      setDailySelected((prev) => (prev = mountedItem.rules.daily))
      setMultiSelected((prev) => (prev = [...mountedItem.rules.multi]))
      setIsFirstLoaded(true)
    }
  }, [])

  return (
    <div className="selects-list">
      <div className="selects-list__wrap selects-list__wrap_left">
        <AppSelect
          label="Как принимать?"
          options={periodOptions}
          selectedOption={periodSelected}
          setSelectedOption={setPeriodSelected}
        />
        <AppSelect
          label="Сколько раз в день?"
          options={dailyOptions}
          selectedOption={dailySelected}
          setSelectedOption={setDailySelected}
        />
      </div>
      <div className="selects-list_multiple">
        {multiSelected.map((item, index) => (
          <div className="selects-list__wrap" key={index}>
            <AppSelect
              label="Время"
              options={timeOptions}
              selectedOption={item.time}
              setSelectedOption={(e) =>
                handleChangeMultiValues(item, "time", e)
              }
            />
            <AppSelect
              label="Дозировка"
              options={dosageOptions}
              selectedOption={item.dosage}
              setSelectedOption={(e) =>
                handleChangeMultiValues(item, "dosage", e)
              }
            />
            <button
              disabled={multiSelected.length === 1}
              onClick={() => handleRemove(index)}
              className={`cross-btn align-center ${
                multiSelected.length === 1 ? "cross-btn_disabled" : ""
              }`}
            >
              <AppIcon
                name="icon-cross"
                width="24"
                height="24"
                color={
                  multiSelected.length === 1 ? "rgba(0, 0, 0, 0.16)" : "#A61911"
                }
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SelectsList
