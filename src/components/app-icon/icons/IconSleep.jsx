import React from "react";

const IconSleep = ({ height, width, color, opacity }) => {
  return (
    <svg
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
        <g clipPath="url(#clip0_2_1543)">
          <path d="M12 21.0977C16.9706 21.0977 21 17.0682 21 12.0977C21 7.12709 16.9706 3.09766 12 3.09766C7.02944 3.09766 3 7.12709 3 12.0977C3 17.0682 7.02944 21.0977 12 21.0977Z" stroke={color} strokeOpacity={opacity} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 3.09766V7.09766" stroke={color} strokeOpacity={opacity} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 21.0977V18.0977" stroke={color} strokeOpacity={opacity} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 12.0977H7" stroke={color} strokeOpacity={opacity} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 12.0977H18" stroke={color} strokeOpacity={opacity} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 12.0977V12.1077" stroke={color} strokeOpacity={opacity} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
    </svg>
  );
};

export { IconSleep };