import React from "react"

const IconAntioxydants = ({ height, width, color, opacity }) => {
  return (
    <svg
      className="fill-svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 3.75C3.6 3.75 3 6.25 3 7.5V23.25H21V7.5C21 5.625 20.25 3.75 18 3.75H6ZM4.5 8.25V21.75H19.5V7.5C19.5 6.72476 19.339 6.11888 19.0957 5.75393C18.9099 5.47525 18.6321 5.25 18 5.25H6C5.44402 5.25 5.14046 5.48712 4.8998 5.90493C4.75311 6.1596 4.65121 6.45898 4.58701 6.75H14.25V8.25H4.5Z"
        fill={color}
        fillOpacity={opacity}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 4.5V0H18V4.5H6ZM7.5 3.75V0.75H9V3.75H7.5ZM9.75 0.75V3.75H11.25V0.75H9.75ZM12.75 3.75V0.75H14.25V3.75H12.75ZM15 0.75V3.75H16.5V0.75H15Z"
        fill={color}
        fillOpacity={opacity}
      />
      <path
        d="M3.75 10.5L20.25 10.5V9L3.75 9V10.5Z"
        fill={color}
        fillOpacity={opacity}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.7116 13.9209C11.8635 13.9622 10.9724 14.2077 10.2303 14.8261C9.51777 15.4199 9.13512 16.3184 8.97069 17.2823C8.91822 17.5899 8.88967 17.895 8.87867 18.1857L11.0948 15.9696L12.1554 17.0303L9.90861 19.2771C10.1668 19.2739 10.4399 19.2577 10.72 19.2241C11.6732 19.1096 12.6429 18.8004 13.3949 18.1738C14.1004 17.5859 14.4175 16.7626 14.5072 15.9062C14.5781 15.2294 14.5009 14.5737 14.3881 14.0929C13.9598 13.98 13.3631 13.8892 12.7116 13.9209ZM12.6386 12.4227C13.7085 12.3706 14.6728 12.5763 15.2634 12.7977L15.5984 12.9234L15.7115 13.2628C15.9282 13.9127 16.1148 14.958 15.999 16.0625C15.8825 17.1749 15.4496 18.4141 14.3551 19.3262C13.3071 20.1995 12.0268 20.5779 10.8989 20.7134C9.7704 20.8489 8.7289 20.7497 8.0874 20.6071L7.61049 20.5011L7.51468 20.022C7.37388 19.318 7.29356 18.1936 7.49205 17.0301C7.69011 15.869 8.18246 14.5801 9.26998 13.6738C10.3278 12.7922 11.5617 12.4752 12.6386 12.4227Z"
        fill={color}
        fillOpacity={opacity}
      />
    </svg>
  )
}

export { IconAntioxydants }
