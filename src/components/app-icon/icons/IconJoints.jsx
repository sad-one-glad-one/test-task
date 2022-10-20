import React from "react";

const IconJoints = ({ height, width, color, opacity }) => {
  return (
    <svg
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 25"
      xmlns="http://www.w3.org/2000/svg"
    >
        <g clipPath="url(#clip0_2_1551)">
            <path d="M1 18.9023L5.66883 14.0741C5.32908 13.4315 4.34381 11.8573 5.15921 10.7006C5.9746 9.54391 7.89464 10.0907 8.21694 10.7004C8.72656 11.6645 8.36615 12.2876 8.72656 12.6283C9.23618 13.1101 10.765 12.1464 11.2747 13.1103C11.7843 14.0742 10.3429 15.3206 11.7843 16.0022C12.8035 16.4841 13.8228 15.5202 14.842 16.4839C15.648 17.246 13.8228 20.3398 11.2747 19.8578C9.23618 19.4722 9.23618 18.8939 8.72656 18.4119" stroke={color} strokeOpacity={opacity} strokeWidth="2" strokeLinecap="round"/>
            <path d="M9.74563 19.3757L5.53174 23.4023" stroke={color} strokeOpacity={opacity} strokeWidth="2" strokeLinecap="round"/>
            <path d="M23.0005 5.40234L18.9665 9.73667C19.9382 11.6645 18.9189 14.0743 16.4184 14.0743C13.5645 14.0743 13.313 11.3432 13.313 10.2186C12.1239 10.3793 8.72648 9.73667 9.79334 7.32691C10.6654 5.35704 13.3131 4.91714 14.8896 5.88105" stroke={color} strokeOpacity={opacity} strokeWidth="2" strokeLinecap="round"/>
            <path d="M14.063 5L18.063 1" stroke={color} strokeOpacity={opacity} strokeWidth="2" strokeLinecap="round"/>
        </g>
    </svg>
  );
};

export { IconJoints };