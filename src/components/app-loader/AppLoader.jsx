import React from "react"
import "./index.scss"

const AppLoader = () => {
  return (
    <section className="app-loader__wrap">
      <svg className="app-loader">
        <circle className="app-loader__circle" cx="32" cy="32" r="24"></circle>
      </svg>
    </section>
  )
}

export default AppLoader
