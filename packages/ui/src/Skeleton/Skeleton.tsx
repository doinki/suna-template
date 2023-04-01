import { forwardRef } from 'react';
import { twJoin } from 'tailwind-merge';

import type { OverridableComponent } from '../types';
import skeletonClasses from './skeletonClasses';
import type { SkeletonProps, SkeletonTypeMap } from './skeletonTypes';

const Skeleton: OverridableComponent<SkeletonTypeMap> = forwardRef<
  HTMLElement,
  SkeletonProps
>((props, ref) => {
  const {
    animation = 'pulse',
    className,
    component: Component = 'span',
    height,
    style,
    variant = 'text',
    width,
    ...other
  } = props;

  return (
    <Component
      ref={ref}
      className={twJoin(
        'block bg-black/10 child:invisible',
        animation && skeletonClasses.animations[animation](),
        skeletonClasses.variants[variant](),
        className
      )}
      style={{ height, width, ...style }}
      {...other}
    />
  );
});

export default Skeleton;
