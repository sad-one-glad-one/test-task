import React from "react"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import AppCollapse from "../app-collapse/AppCollapse"
import { AppIcon } from "../app-icon/AppIcon"
import AppText from "../app-text/AppText"
import "./index.scss"

const CollapseListTime = () => {
  const basketData = useSelector((state) => state.basket.basketData)
  let periodData = []

  useEffect(() => {
    periodData = basketData.filter((item) => item.rules.period === "Ежедневно")
  }, [basketData])

  return (
    <div>
      {periodData.map((item) => (
        <AppCollapse
          key={`by-appointment-time-${Date.now()}`}
          title={
            <div className="select-title">
              <div className="select-title__name">
                <AppText
                  text={`${item.rules?.period} в ${item.rules?.multi[0].time}`}
                  fontWeight={500}
                  lineHeight={24}
                />
                <AppText
                  text={item.rules?.time}
                  fontWeight={500}
                  lineHeight={24}
                />
              </div>
              <div className="select-title__info">
                <AppText text={item.item?.GoodsCommercialName} />
                <div
                  className="align-center"
                  onClick={(e) => {
                    e.stopPropagation()
                    alert("remove")
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
          }
        >
          bark
        </AppCollapse>
      ))}
    </div>
  )
}

export default CollapseListTime
