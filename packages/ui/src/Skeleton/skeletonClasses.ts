import type { ClassNameValue } from '../types';
import type {
  SkeletonAnimation,
  SkeletonProps,
  SkeletonVariant,
} from './skeletonTypes';

const animations: Record<
  SkeletonAnimation,
  (props?: SkeletonProps) => ClassNameValue
> = {
  pulse: () => 'animate-skeleton-pulse duration-75',
};

const variants: Record<
  SkeletonVariant,
  (props?: SkeletonProps) => ClassNameValue
> = {
  circular: () => 'rounded-full',
  rectangular: () => '',
  rounded: () => 'rounded-md',
  text: () => 'my-0 scale-y-60 rounded-md before:content-nbsp',
};

const skeletonClasses = {
  animations,
  variants,
};

export default skeletonClasses;
