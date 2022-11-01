import React from "react"
import { useSelector } from "react-redux"
import AppCollapse from "../app-collapse/AppCollapse"
import { AppIcon } from "../app-icon/AppIcon"
import AppText from "../app-text/AppText"
import SelectsList from "../selects-list/SelectsList"
import "./index.scss"

const CollapseListBio = () => {
  const basketData = useSelector((state) => state.basket.basketData)

  return (
    <section className="collapse-list">
      {basketData.map((item, i) => (
        <AppCollapse
          key={`${Date.now()}-${i}`}
          title={
            <div className="select-title">
              <div className="select-title__name">
                <div className="align-center img-wrap">
                  <img
                    src={item.item?.Picture}
                    alt="mini image"
                    draggable={false}
                  />
                </div>
                <AppText
                  text={item.item?.GoodsCommercialName}
                  fontWeight={500}
                  lineHeight={24}
                />
              </div>
              <div className="select-title__info">
                <AppText text={item.rules?.time} />
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
          <SelectsList mountedItem={item} />
        </AppCollapse>
      ))}
    </section>
  )
}

export default CollapseListBio
