import type { IconProps } from '@suna/types';
import type { FC } from 'react';

const Circle: FC<IconProps> = (props) => {
  const { size = '1em', ...other } = props;

  return (
    <svg
      aria-hidden="true"
      height={size}
      viewBox="0 0 32 32"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...other}
    >
      <defs>
        <linearGradient id="-">
          <stop offset="0%" stopColor="#0f4c81" />
          <stop offset="50%" stopColor="#6667ab" />
          <stop offset="100%" stopColor="#98b4d4" />
        </linearGradient>
      </defs>
      <circle
        cx="16"
        cy="16"
        fill="url(#-)"
        r="14"
        stroke="#000"
        strokeWidth="2"
      />
    </svg>
  );
};

export default Circle;
