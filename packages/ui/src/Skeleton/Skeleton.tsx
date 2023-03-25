import type { FC } from 'react';
import { twJoin } from 'tailwind-merge';

import { variants } from './skeletonClasses';
import type { SkeletonProps } from './skeletonTypes';

const Skeleton: FC<SkeletonProps> = (props) => {
  const {
    animation = 'pulse',
    className,
    component: Component = 'span',
    height,
    style,
    variant = 'text',
    width,
    ...rest
  } = props;

  return (
    <Component
      aria-busy={Boolean(animation)}
      aria-live="polite"
      className={twJoin(
        'block bg-black/10',
        animation === 'pulse' && 'animate-skeleton-pulse duration-75',
        variants[variant](),
        className
      )}
      style={{ ...style, height, width }}
      {...rest}
    />
  );
};

export default Skeleton;
