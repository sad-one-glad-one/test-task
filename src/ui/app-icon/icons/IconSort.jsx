import React from "react"

const IconSort = ({ height, width, color, opacity }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 23"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 7C3 6.44772 3.44772 6 4 6L20 6C20.5523 6 21 6.44772 21 7C21 7.55229 20.5523 8 20 8L4 8C3.44772 8 3 7.55228 3 7ZM3 12C3 11.4477 3.44772 11 4 11L14 11C14.5523 11 15 11.4477 15 12C15 12.5523 14.5523 13 14 13L4 13C3.44772 13 3 12.5523 3 12ZM3 17C3 16.4477 3.44772 16 4 16H9C9.55228 16 10 16.4477 10 17C10 17.5523 9.55228 18 9 18H4C3.44772 18 3 17.5523 3 17Z"
        fill={color}
        fillOpacity={opacity}
      />
    </svg>
  )
}

export { IconSort }
