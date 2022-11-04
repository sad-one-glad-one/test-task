import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { sortData } from "../../store/LocalDataReducer"
import { AppIcon } from "../../ui/app-icon/AppIcon"
import AppSidebar from "../../ui/app-sidebar/AppSidebar"
import AppText from "../../ui/app-text/AppText"
import "./index.scss"

const SidebarLeft = () => {
  const dispatch = useDispatch()
  const apiData = useSelector((state) => state.fromApi.data)

  const [isAuth, setIsAuth] = useState(false)
  const [isNavbarShort, setIsNavbarShort] = useState(false)
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

  return (
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
                <AppText text="Нутрицилоги" fontWeight={500} lineHeight={16} />
              </header>
              <ul className="navbar-body__list"></ul>
              <header className="navbar-body__title">
                <AppText text="Документы" fontWeight={500} lineHeight={16} />
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
                <AppText text="Юлия Шмелёва" fontSize={14} lineHeight={16} />
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
  )
}

export default SidebarLeft
