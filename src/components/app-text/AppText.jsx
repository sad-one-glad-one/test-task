import React from "react";

const AppText = ({text, fontSize, lineHeight, fontWeight}) => {

    return (
        <p 
            style={{
                fontSize : fontSize? `${fontSize}px` : '16px',
                lineHeight : lineHeight? `${lineHeight}px` : '20px',
                fontWeight : fontWeight? fontWeight : 400
            }}
        >
            {text}
        </p>
    );
};

export default AppText;