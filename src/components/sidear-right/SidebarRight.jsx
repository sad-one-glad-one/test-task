import React, { useState } from "react"
import { useSelector } from "react-redux"
import CollapseListTime from "../../components/collapse-list-time/CollapseListTime"
import CollapseListBio from "../../components/collapse-list-bio/CollapseListBio"
import AppSidebar from "../../ui/app-sidebar/AppSidebar"
import AppTabs from "../../ui/app-tabs/AppTabs"
import AppText from "../../ui/app-text/AppText"
import "./index.scss"

const SidebarRight = () => {
  const basketData = useSelector((state) => state.basket.basketData)

  const [isBasketShort, setIsBasketShort] = useState(false)
  const [activeTab, setActiveTab] = useState(1)
  const tabs = [
    { index: 1, text: "По времени приёма" },
    { index: 2, text: "По биодобавке" },
  ]

  return (
    <AppSidebar
      isShort={isBasketShort}
      setIsShort={setIsBasketShort}
      isRight={true}
    >
      <div
        className={isBasketShort ? "basketbar-body_short" : "basketbar-body"}
      >
        {isBasketShort && basketData.length > 0 ? (
          basketData?.map((item, i) => (
            <div className="basketbar-body__item" key={i}>
              <div className="align-center img-wrap">
                <img
                  src={item.item?.Picture}
                  alt="mini image"
                  draggable={false}
                />
              </div>
              <AppText text={item.item?.GoodsCommercialName} />
            </div>
          ))
        ) : isBasketShort && basketData.length < 1 ? (
          <div className="basketbar-body_short-empty">
            <AppText text="Выберите биодобавку, чтобы собрать свой персональный курс" />
          </div>
        ) : !isBasketShort ? (
          <div className="basketbar-body">
            <AppTabs
              tabs={tabs}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            <div className="basketbar-body__list">
              {/* ПО ВРЕМЕНИ ПРИЁМА */}
              {activeTab === 1 && <CollapseListTime />}
              {/* ПО БИОДОБАВКЕ */}
              {activeTab === 2 && <CollapseListBio />}
            </div>
          </div>
        ) : (
          <div />
        )}
      </div>
    </AppSidebar>
  )
}

export default SidebarRight
