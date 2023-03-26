import type { ElementType, HTMLAttributes } from 'react';

export type SkeletonAnimation = 'pulse';
export type SkeletonVariant = 'circular' | 'rectangular' | 'rounded' | 'text';

export interface SkeletonProps extends HTMLAttributes<HTMLElement> {
  /**
   * @default 'pulse'
   */
  animation?: SkeletonAnimation | false;

  component?: ElementType;

  height?: string | number;

  variant?: SkeletonVariant;

  width?: string | number;
}
