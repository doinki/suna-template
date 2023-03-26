import type { FC } from 'react';
import { twJoin } from 'tailwind-merge';

import classes from './skeletonClasses';
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
        animation && classes.animations[animation](),
        classes.variants[variant](),
        className
      )}
      style={{ ...style, height, width }}
      {...rest}
    />
  );
};

export default Skeleton;
