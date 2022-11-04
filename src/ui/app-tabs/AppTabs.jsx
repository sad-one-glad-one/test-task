import React from 'react';
import AppText from '../app-text/AppText';
import './index.scss'

const AppTabs = ({tabs, activeTab, setActiveTab}) => {
	const handleClick = (index) => {
		if(activeTab !== index) setActiveTab(index)
	}

	return (
		<div className="app-tabs">
			{tabs?.map((tab) =>
				<button 
					className={`app-tabs__item ${activeTab === tab.index ? 'app-tabs__item_active' : ''}`}
					key={new Date().getTime()+tab.index}
					onClick={()=>handleClick(tab.index)}
				>
					<AppText text={tab.text} fontWeight={500} lineHeight={16} />
				</button>
      )}
		</div>
	);
};

export default AppTabs;