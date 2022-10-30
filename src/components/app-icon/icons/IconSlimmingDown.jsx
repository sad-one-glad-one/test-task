import React from "react"

const IconSlimmingDown = ({ height, width, color, opacity }) => {
  return (
    <svg
      className="fill-svg"
      width={width}
      height={height}
      viewBox="0 0 24 25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2_1538)">
        <path
          d="M2 8.50806L0 8.50807V7.50807L2 7.50806V5.50806L5 8.00806L2 10.5081V8.50806Z"
          fill={color}
          fillOpacity={opacity}
        />
        <path
          d="M22 7.50806L24 7.50805L24 8.50805L22 8.50806L22 10.5081L19 8.00806L22 5.50806L22 7.50806Z"
          fill={color}
          fillOpacity={opacity}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.0001 7.04848C17.0001 4.7499 17.3295 3.2514 17.4731 2.83215L16.5271 2.50805C16.3374 3.06177 16.0001 4.67679 16.0001 7.04848C16.0001 8.61102 16.5343 10.1491 17.0961 11.6067C17.1784 11.8203 17.2612 12.0321 17.3435 12.2422C17.6064 12.9145 17.863 13.5703 18.076 14.2183C16.9884 14.3391 14.0584 14.647 12.2501 14.6702C10.1803 14.6967 7.21279 14.375 6.02287 14.2343C6.21491 13.6638 6.43449 13.0869 6.65852 12.4984C6.74072 12.2825 6.82351 12.065 6.90576 11.8456C7.46768 10.3472 8.0001 8.77044 8.0001 7.17007C8.0001 4.73459 7.66305 3.07778 7.47444 2.51196L6.52576 2.82818C6.67048 3.26236 7.0001 4.80555 7.0001 7.17007C7.0001 8.5697 6.53252 9.99294 5.96943 11.4945C5.89099 11.7037 5.81056 11.9147 5.72953 12.1272C5.24058 13.4097 4.73012 14.7486 4.5069 16.0879C4.10279 18.5125 4.0001 20.4734 4.0001 21.1701H5.0001C5.0001 20.5334 5.0974 18.6276 5.49329 16.2523C5.52262 16.0763 5.55733 15.9003 5.59672 15.7242L12.0001 21.6702L18.5372 16.0669C18.9079 18.294 19.0001 20.0682 19.0001 20.6701H20.0001C20.0001 19.9906 19.8972 18.0812 19.4929 15.7208C19.2692 14.415 18.7578 13.1098 18.2689 11.8622C18.1879 11.6556 18.1074 11.4502 18.0291 11.247C17.4659 9.78568 17.0001 8.40486 17.0001 7.04848ZM12.0001 12.6702C12.2762 12.6702 12.5001 12.4463 12.5001 12.1702C12.5001 11.894 12.2762 11.6702 12.0001 11.6702C11.724 11.6702 11.5001 11.894 11.5001 12.1702C11.5001 12.4463 11.724 12.6702 12.0001 12.6702Z"
          fill={color}
          fillOpacity={opacity}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.9812 2.58338L17.8515 2.96179C17.7263 3.32726 17.4001 4.77914 17.4001 7.04848C17.4001 8.32232 17.8385 9.64012 18.4024 11.1032C18.4802 11.3051 18.5601 11.509 18.6411 11.7158L18.6489 11.7357C19.1327 12.9702 19.6566 14.3071 19.8872 15.6533C20.295 18.0339 20.4001 19.966 20.4001 20.6701V21.0701H18.6001V20.6701C18.6001 20.1554 18.5286 18.7083 18.2531 16.8372L11.9894 22.2061L5.85619 16.511C5.49009 18.7762 5.4001 20.5742 5.4001 21.1701V21.5701H3.6001V21.1701C3.6001 20.4494 3.70495 18.4665 4.11234 16.0221C4.34214 14.6433 4.86443 13.2734 5.34849 12.0038L5.35267 11.9929L5.35562 11.9851C5.43671 11.7724 5.51691 11.562 5.5949 11.3541C6.15852 9.85107 6.6001 8.48933 6.6001 7.17007C6.6001 4.83393 6.27346 3.33619 6.14628 2.95467L6.01979 2.5752L7.72742 2.00599L7.85391 2.38546C8.06007 3.00394 8.4001 4.70621 8.4001 7.17007C8.4001 8.85066 7.8418 10.4887 7.28029 11.9861C7.19765 12.2065 7.11452 12.4249 7.03239 12.6406C6.86991 13.0675 6.7115 13.4837 6.56472 13.894C7.94878 14.0488 10.4474 14.2932 12.245 14.2702C13.8041 14.2502 16.2211 14.0148 17.5354 13.8748C17.3631 13.3906 17.1706 12.8982 16.9715 12.3894L16.971 12.388C16.8888 12.178 16.8056 11.9653 16.7228 11.7505C16.1616 10.2943 15.6001 8.69341 15.6001 7.04848C15.6001 4.64754 15.9406 2.98591 16.1487 2.37841L16.2783 2L17.9812 2.58338ZM17.3435 12.2422C17.5541 12.7807 17.7606 13.3087 17.944 13.8305C17.9895 13.9601 18.0336 14.0894 18.076 14.2183C17.9602 14.2312 17.8234 14.2462 17.6693 14.2627C16.3769 14.4015 13.8658 14.6495 12.2501 14.6702C10.3867 14.694 7.79578 14.4357 6.42928 14.2812C6.2779 14.2641 6.14155 14.2483 6.02287 14.2343C6.06618 14.1056 6.11089 13.9766 6.15674 13.8473C6.31418 13.403 6.48502 12.9542 6.65852 12.4984C6.74072 12.2825 6.82351 12.065 6.90576 11.8456C7.46768 10.3472 8.0001 8.77044 8.0001 7.17007C8.0001 5.15223 7.76873 3.66889 7.58211 2.8977C7.54349 2.73809 7.50678 2.60898 7.47444 2.51196L6.52576 2.82818C6.67048 3.26236 7.0001 4.80555 7.0001 7.17007C7.0001 8.5697 6.53252 9.99294 5.96943 11.4945C5.89099 11.7037 5.81056 11.9147 5.72953 12.1272C5.24058 13.4097 4.73012 14.7486 4.5069 16.0879C4.1639 18.1459 4.03805 19.8698 4.00783 20.7701C4.00245 20.9305 4.0001 21.0647 4.0001 21.1701H5.0001C5.0001 20.5334 5.0974 18.6276 5.49329 16.2523C5.49705 16.2297 5.50089 16.2072 5.50482 16.1847C5.53159 16.0312 5.56237 15.8778 5.59672 15.7242L12.0001 21.6702L18.5372 16.0669C18.5633 16.2237 18.588 16.3782 18.6114 16.5302C18.9204 18.5379 19.0001 20.1105 19.0001 20.6701H20.0001C20.0001 20.5652 19.9976 20.4309 19.992 20.2701C19.9611 19.39 19.8348 17.7166 19.4929 15.7208C19.2692 14.415 18.7578 13.1098 18.2689 11.8622C18.1879 11.6556 18.1074 11.4502 18.0291 11.247C17.4659 9.78568 17.0001 8.40486 17.0001 7.04848C17.0001 4.7499 17.3295 3.2514 17.4731 2.83215L16.5271 2.50805C16.494 2.60465 16.4564 2.73354 16.4169 2.89312C16.23 3.64829 16.0001 5.09054 16.0001 7.04848C16.0001 8.61102 16.5343 10.1491 17.0961 11.6067C17.1784 11.8203 17.2612 12.0321 17.3435 12.2422ZM12.9001 12.1702C12.9001 12.6672 12.4972 13.0702 12.0001 13.0702C11.503 13.0702 11.1001 12.6672 11.1001 12.1702C11.1001 11.6731 11.503 11.2702 12.0001 11.2702C12.4972 11.2702 12.9001 11.6731 12.9001 12.1702ZM12.5001 12.1702C12.5001 12.4463 12.2762 12.6702 12.0001 12.6702C11.724 12.6702 11.5001 12.4463 11.5001 12.1702C11.5001 11.894 11.724 11.6702 12.0001 11.6702C12.2762 11.6702 12.5001 11.894 12.5001 12.1702Z"
          fill={color}
          fillOpacity={opacity}
        />
        <path
          d="M12.5 16C10.9 16 7.83333 15.6667 6.5 15.5L12 20.5L18 15.5C16.8333 15.6667 14.1 16 12.5 16Z"
          fill="white"
        />
      </g>
    </svg>
  )
}

export { IconSlimmingDown }
