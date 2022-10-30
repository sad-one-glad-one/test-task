import React from "react"

const IconSkin = ({ height, width, color, opacity }) => {
  return (
    <svg
      className="stroke-svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 25 25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 15.5745H8.5C7.87589 17.0817 7.55408 18.931 8.95833 21.1915C10.5472 23.7492 12.6277 24 14.0638 24C15.5 24 17.5 23 18 22.5C18.9093 21.5907 20 20 20 18.5V15.5745H19.0417H24.5417M16.4363 2.04333C16.4365 1.62497 14.6811 4.30417 14.0957 7.13024C13.6275 9.39093 13.6278 11.0868 12.6915 13.3476C12.2233 14.478 11.5681 15.0432 11.2872 16.7388C11.0064 18.4345 12.2236 20.6953 13.6278 20.6953C15.0321 20.6953 15.9681 19.5649 16.4362 18.4345C16.9043 17.304 16.9043 16.1736 15.9681 14.478C15.0319 12.7824 15.0133 11.2215 15.5 7.69545C15.9681 4.30401 16.4362 2.60837 16.4363 2.04333Z"
        stroke={color}
        strokeOpacity={opacity}
        strokeWidth="2"
      />
      <path
        d="M6 3L7.08036 6.50193L10 7.79776L7.08036 9.0936L6 12.5955L4.91964 9.0936L2 7.79776L4.91964 6.50193L6 3Z"
        stroke={color}
        strokeOpacity={opacity}
        strokeWidth="1.5"
      />
    </svg>
  )
}

export { IconSkin }
