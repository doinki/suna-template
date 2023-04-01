import type { ClassNameValue } from '../types';
import type { SkeletonAnimation, SkeletonVariant } from './skeletonTypes';

const animations: Record<SkeletonAnimation, () => ClassNameValue> = {
  pulse: () => 'animate-skeleton-pulse duration-75',
};

const variants: Record<SkeletonVariant, () => ClassNameValue> = {
  circular: () => 'rounded-full',
  rectangular: () => '',
  rounded: () => 'rounded-md',
  text: () => 'my-0 scale-y-60 rounded-md before:content-nbsp',
};

const skeletonClasses = { animations, variants };

export default skeletonClasses;
