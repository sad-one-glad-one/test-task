import React from "react";
import AppText from "../app-text/AppText";
import "./index.scss";

const AppButton = ({isActive, text}) => {
    return (
        <button
            className={
                `app-button ${isActive ? 'app-button_active'  : ''}`
            }
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