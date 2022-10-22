import React from "react";

const AppText = ({text, fontSize, lineHeight, fontWeight, color}) => {

    return (
      <p 
				className="app-text"
        style={{
            fontSize : fontSize? `${fontSize}px` : '16px',
            lineHeight : lineHeight? `${lineHeight}px` : '20px',
            fontWeight : fontWeight? fontWeight : 400,
            color: color ? color : 'rgba(0, 0, 0, 0.87)'
        }}
      >
        {text}
      </p>
    );
};

export default AppText;