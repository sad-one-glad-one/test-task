import React, { useEffect } from "react"
import { AppIcon } from "../app-icon/AppIcon"
import AppSelect from "../app-select/AppSelect"
import "./index.scss"

const SelectsList = ({
  periodSelected,
  setPeriodSelected,
  dailySelected,
  setDailySelected,
  multiSelected,
  setMultiSelected,
}) => {
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

  let tempMultiState = [...multiSelected]

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
    setDailySelected(--dailySelected)
  }

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
