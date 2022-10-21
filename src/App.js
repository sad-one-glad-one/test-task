import React, {useState} from "react";
import "./reset.scss";
import AppText from "./components/app-text/AppText";
import AppButton from "./components/app-button/AppButton";
import { AppIcon } from "./components/app-icon/AppIcon";
import AppTabs from "./components/app-tabs/AppTabs";
import AppCollapse from "./components/app-collapse/AppCollapse";

function App() {
	const tabs = [{text: "по времени приёма", index: 1}, {text: "по биодобавке", index: 2}]
	const [activeTab, setActiveTab] = useState(1)

  return (
    <div className="app" style={{display:'grid', gridTemplateColumns: '1fr', gridRowGap: '24px'}}>
      <AppText text="Гидрокситриптофан (5-htp)" fontSize={16} fontWeight={500}/>
      <div>
				<AppButton text={'Добавить'} />
			</div>
			<AppTabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
			<AppCollapse />
      <div style={{display:'grid', gridTemplateColumns: "repeat(6,1fr)"}}>
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
