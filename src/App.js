import React, { useEffect, useState } from "react"
import "./reset.scss"
import "./index.scss"
import AppSidebar from "./components/app-sidebar/AppSidebar"
import { useDispatch, useSelector } from "react-redux"
import { getData } from "./api/getData"
import DataTable from "./components/data-table/DataTable"
import AppText from "./components/app-text/AppText"
import { AppIcon } from "./components/app-icon/AppIcon"
import { sortData } from "./store/LocalDataReducer"
import AppModal from "./components/app-modal/AppModal"
import AppTabs from "./components/app-tabs/AppTabs"
import AppCollapse from "./components/app-collapse/AppCollapse"
import AppLoader from "./components/app-loader/AppLoader"

function App() {
  const isLoading = useSelector((state) => state.fromApi.isLoading)
  const apiData = useSelector((state) => state.fromApi.data)
  const basketData = useSelector((state) => state.basket.basketData)
  const dispatch = useDispatch()
  const [isAuth, setIsAuth] = useState(false)
  const [navbar] = useState([
    { name: "Anti-age", icon: "icon-anti-age" },
    { name: "Антистресс", icon: "icon-antistress" },
    { name: "Антиоксиданты", icon: "icon-antioxydants" },
    { name: "Женское здоровье", icon: "icon-female-health" },
    { name: "Здоровый сон", icon: "icon-sleep" },
    { name: "Кожа, волосы, ногти", icon: "icon-skin" },
    { name: "Крепкий иммунитет", icon: "icon-immunity" },
    { name: "Мужское здоровье", icon: "icon-male-health" },
    { name: "Омега, жирные кислоты", icon: "icon-omega" },
    { name: "Память и внимание", icon: "icon-memory" },
    { name: "Похудение и стройность", icon: "icon-slimming-down" },
    { name: "Спокойствие и фокус", icon: "icon-calmness" },
    { name: "Суставы и связки", icon: "icon-joints" },
  ])
  const [isNavbarShort, setIsNavbarShort] = useState(false)
  const [isBasketShort, setIsBasketShort] = useState(false)

  const sortArr = (type) => {
    let sortedData = apiData.filter((eachVal) => {
      let currentVal = eachVal.Purposes.some(({ Purpose }) => Purpose === type)
      return currentVal
    })
    dispatch(sortData(sortedData))
  }
  const restoreArr = () => {
    dispatch(sortData(apiData))
  }

  const [activeTab, setActiveTab] = useState(1)
  const tabs = [
    { index: 1, text: "По времени приёма" },
    { index: 2, text: "По биодобавке" },
  ]

  useEffect(() => {
    dispatch(getData())
  }, [])

  return (
    <div>
      {isLoading ? (
        <div>
          <AppLoader />
        </div>
      ) : (
        <div
          className="app"
          style={{
            display: "flex",
            justifyContent: "space-between",
            gridColumnGap: "8px",
          }}
        >
          <AppSidebar isShort={isNavbarShort} setIsShort={setIsNavbarShort}>
            <div className="navbar-body__wrap">
              <nav
                className={`navbar-body ${
                  isNavbarShort ? "navbar-body_short" : "navbar-body_long"
                }`}
              >
                <header
                  className="navbar-body__title navbar-body__title_active"
                  onClick={() => restoreArr()}
                >
                  <AppText text="Каталог" fontWeight={500} lineHeight={16} />
                </header>
                <ul className={`navbar-body__list `}>
                  {navbar.map((item) => (
                    <li
                      className="navbar-body__list-item"
                      key={item.name}
                      onClick={() => sortArr(item.name)}
                    >
                      {!isNavbarShort ? (
                        <AppText text={item.name} />
                      ) : (
                        <div className="icon-wrap align-center">
                          {/* TODO: обдумать что делать с hover'ом и иконками */}
                          <AppIcon
                            name={item.icon}
                            width="24"
                            height="24"
                            color="rgba(0, 0, 0, 0.87)"
                          />
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
                {!isNavbarShort && (
                  <div>
                    <header className="navbar-body__title">
                      <AppText
                        text="Нутрицилоги"
                        fontWeight={500}
                        lineHeight={16}
                      />
                    </header>
                    <ul className="navbar-body__list"></ul>
                    <header className="navbar-body__title">
                      <AppText
                        text="Документы"
                        fontWeight={500}
                        lineHeight={16}
                      />
                      <div className="navbar-body__title-icon align-center">
                        <AppIcon
                          name="icon-chevron-up"
                          width="24"
                          height="24"
                          color="rgba(0, 0, 0, 0.64)"
                        />
                      </div>
                    </header>
                    <ul className="navbar-body__list"></ul>
                  </div>
                )}
              </nav>
              <div
                className={`navbar-body__auth ${
                  isNavbarShort ? "navbar-body_short" : "navbar-body_long"
                }`}
              >
                {isAuth ? (
                  <button
                    className="navbar-body__auth-btn navbar-body__auth-btn_logined align-center"
                    onClick={() => setIsAuth(false)}
                  >
                    <div className="navbar-body__auth-btn-logo align-center">
                      <AppText
                        text="ЮШ"
                        fontSize={12}
                        fontWeight={700}
                        color="#2662C9"
                      />
                    </div>
                    <div className="text-wrap">
                      <AppText
                        text="Юлия Шмелёва"
                        fontSize={14}
                        lineHeight={16}
                      />
                    </div>
                  </button>
                ) : (
                  <button
                    className="navbar-body__auth-btn align-center"
                    onClick={() => setIsAuth(true)}
                  >
                    <AppIcon
                      name="icon-log-in"
                      width="24"
                      height="24"
                      color="rgba(0, 0, 0, 0.87)"
                    />
                    <div className="text-wrap">
                      <AppText text="Войти" fontSize={14} lineHeight={16} />
                    </div>
                  </button>
                )}
              </div>
            </div>
          </AppSidebar>
          <DataTable />
          <AppSidebar
            isShort={isBasketShort}
            setIsShort={setIsBasketShort}
            isRight={true}
          >
            <div
              className={
                isBasketShort ? "basketbar-body_short" : "basketbar-body"
              }
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
                    {activeTab === 1 &&
                      basketData.map((item) => (
                        <AppCollapse
                          key={`by-appointment-time-${Date.now()}`}
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
                                  text={item.rules?.time}
                                  fontWeight={500}
                                  lineHeight={24}
                                />
                              </div>
                              <div className="select-title__info">
                                <AppText
                                  text={item.item?.GoodsCommercialName}
                                />
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
                    {/* ПО БИОДОБАВКЕ */}
                    {activeTab === 2 &&
                      basketData.map((item, i) => (
                        <AppCollapse
                          key={`by-bioadditives-${Date.now()}`}
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
                          quack
                        </AppCollapse>
                      ))}
                  </div>
                </div>
              ) : (
                <div />
              )}
            </div>
          </AppSidebar>
          <AppModal />
        </div>
      )}
    </div>
  )
}

export default App
