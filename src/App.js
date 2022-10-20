import React from "react";
import "./reset.scss";
import AppText from "./components/app-text/AppText";
import AppButton from "./components/app-button/AppButton";
import { AppIcon } from "./components/app-icon/AppIcon";

function App() {
  return (
    <div className="app">
      <AppText text="Гидрокситриптофан (5-htp)" fontSize={16} fontWeight={500}/>
      <AppButton text={'Добавить'} />
      <div style={{display:'grid', gridTemplateColumns: "repeat(6,1fr)", backgroundColor: 'lightgray'}}>
        <AppIcon name="icon-anti-age" width="64" height="64" color="teal" opacity="0.7" />
        <AppIcon name="icon-antioxydants" width="64" height="64" color="teal" opacity="0.5" />
        <AppIcon name="icon-antistress" width="64" height="64" color="teal" opacity="0.5" />
        <AppIcon name="icon-calmness" width="64" height="64" color="teal" opacity="0.5" />
        <AppIcon name="icon-chevron-up" width="64" height="64" color="teal" opacity="0.5" />
        <AppIcon name="icon-cross" width="64" height="64" color="teal" opacity="0.5" />
        <AppIcon name="icon-female-health" width="64" height="64" color="teal" opacity="0.5" />
        <AppIcon name="icon-immunity" width="64" height="64" color="teal" opacity="0.5" />
        <AppIcon name="icon-joints" width="64" height="64" color="teal" opacity="0.5" />
        <AppIcon name="icon-log-in" width="64" height="64" color="teal" opacity="0.5" />
        <AppIcon name="icon-male-health" width="64" height="64" color="teal" opacity="0.5" />
        <AppIcon name="icon-memory" width="64" height="64" color="teal" opacity="0.5" />
        <AppIcon name="icon-menu" width="64" height="64" color="teal" opacity="0.5" />
        <AppIcon name="icon-navigation" width="64" height="64" color="teal" opacity="0.5" />
        <AppIcon name="icon-omega" width="64" height="64" color="teal" opacity="0.5" />
        <AppIcon name="icon-skin" width="64" height="64" color="teal" opacity="0.5" />
        <AppIcon name="icon-sleep" width="64" height="64" color="teal" opacity="0.5" />
        <AppIcon name="icon-slimming-down" width="64" height="64" color="teal" opacity="0.5" />
        <AppIcon name="icon-sort" width="64" height="64" color="teal" opacity="0.5" />
        <AppIcon name="icon-trash" width="64" height="64" color="teal" opacity="0.5" />
      </div>
    </div>
  );
}

export default App;
