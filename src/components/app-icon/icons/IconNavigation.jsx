import React from "react"

const IconNavigation = ({ height, width, color, opacity }) => {
  return (
    <svg
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 11L22 2L13 21L11 13L3 11Z"
        stroke={color}
        strokeOpacity={opacity}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export { IconNavigation }
