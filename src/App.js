import React from "react";
import "./reset.scss";
import AppText from "./components/app-text/AppText";
import AppButton from "./components/app-button/AppButton";

function App() {
  return (
    <div className="app">
      <AppText text="Гидрокситриптофан (5-htp)" fontSize={16} fontWeight={500}/>
      <AppButton text={'Добавить'} />
    </div>
  );
}

export default App;
