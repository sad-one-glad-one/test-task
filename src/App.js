import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { getData } from "./api/getData"
import SupplementsViews from "./views/SupplementsView"
import "./reset.scss"

function App() {
  const dispatch = useDispatch()
  const [currentScreen, setCurrentScreen] = useState()

  useEffect(() => {
    dispatch(getData())
  }, [])

  switch (currentScreen) {
    default:
      return (
        <div className="App">
          <SupplementsViews />
        </div>
      )
  }
}

export default App
