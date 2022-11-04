import React from "react";
import AppText from "../app-text/AppText";
import "./index.scss";

const AppButton = ({isActive, text, ...props}) => {
    return (
        <button
						{...props}
            className={`app-button ${isActive ? 'app-button_active'  : ''}`}
        >
            <AppText
                fontSize={16}
                text={text}
								color="inherit"
            />
        </button>
    );
};

export default AppButton;