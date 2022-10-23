import React, {useState} from "react";
import "./reset.scss";
import AppText from "./components/app-text/AppText";
import AppButton from "./components/app-button/AppButton";
import { AppIcon } from "./components/app-icon/AppIcon";
import AppTabs from "./components/app-tabs/AppTabs";
import AppCollapse from "./components/app-collapse/AppCollapse";
import AppSelect from "./components/app-select/AppSelect";
import AppModal from "./components/app-modal/AppModal";
import AppSidebar from "./components/app-sidebar/AppSidebar";

function App() {
	const tabs = [{text: "по времени приёма", index: 1}, {text: "по биодобавке", index: 2}]
	const [activeTab, setActiveTab] = useState(1)

	const selectOptions = [
		{name: 'Ежедневно'},
		{name: 'Через день'},
		{name: 'Раз в неделю'},
	]
	const [selectedOption, setSelectedOption] = useState('Ежедневно')

	const [isOpenModal, setIsOpenModal] = useState(false)

  return (
    <div className="app" style={{display:'grid', gridTemplateColumns: 'max-content 1fr', gridRowGap: '24px'}}>
      <AppSidebar>
				Somebody once told me the world is gonna roll me<br/>
				I ain't the sharpest tool in the shed<br/>
				She was looking kind of d*mb with her finger and her thumb<br/>
				In the shape of an L on her forehead
			</AppSidebar>
			<div>
				<AppText text="Гидрокситриптофан (5-htp)" fontSize={16} fontWeight={500}/>
				<div>
					<AppButton text={'Добавить'} />
				</div>
				<AppTabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
				<div>
					<AppButton text="OPEN MODAL" onClick={() => setIsOpenModal(true)}/>
					<AppModal isOpen={isOpenModal} setIsOpen={setIsOpenModal}>
						Somebody once told me the world is gonna roll me<br/>
						I ain't the sharpest tool in the shed<br/>
						She was looking kind of d*mb with her finger and her thumb<br/>
						In the shape of an L on her forehead
					</AppModal>
				</div>
				<AppCollapse>
					Somebody once told me the world is gonna roll me<br/>
					I ain't the sharpest tool in the shed<br/>
					She was looking kind of d*mb with her finger and her thumb<br/>
					In the shape of an L on her forehead
				</AppCollapse>
				<AppSelect 
					label="Как принимать?" 
					options={selectOptions} 
					selectedOption={selectedOption} 
					setSelectedOption={setSelectedOption} 
				/>
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
    </div>
  );
}

export default App;
