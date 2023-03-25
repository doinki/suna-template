import type { ClassNameValue } from '../types';
import type { SkeletonProps, SkeletonVariant } from './skeletonTypes';

export const variants: Record<
  SkeletonVariant,
  (props?: SkeletonProps) => ClassNameValue
> = {
  circular: () => 'rounded-full',
  rectangular: () => '',
  rounded: () => 'rounded-md',
  text: () => 'my-0 scale-y-60 rounded-md before:content-nbsp',
};
