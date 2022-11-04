import React, { useState, useRef } from "react"
import { AppIcon } from "../app-icon/AppIcon"
import "./index.scss"

const AppCollapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const handleEvent = () => {
    setIsOpen(!isOpen)
  }
  let flippedChevronClass = isOpen ? "app-collapse__header-chevron_flipped" : ""

  const collapseBodyRef = useRef()

  return (
    <div className="app-collapse">
      <button className="app-collapse__header" onClick={() => handleEvent()}>
        <div
          className={`app-collapse__header-chevron align-center ${flippedChevronClass}`}
        >
          <AppIcon
            name="icon-chevron-up"
            width="24"
            height="24"
            color="rgba(0, 0, 0, 0.87)"
          />
        </div>
        {title}
      </button>
      <div
        className={`app-collapse__body ${
          isOpen ? "app-collapse__body_opened" : "app-collapse__body_closed"
        }`}
        ref={collapseBodyRef}
        style={
          isOpen
            ? {
                height: collapseBodyRef.current.scrollHeight + "px",
              }
            : {
                height: "0px",
              }
        }
      >
        <div className="app-collapse__body-inner">{children}</div>
      </div>
    </div>
  )
}

export default AppCollapse
