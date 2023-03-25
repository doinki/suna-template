import type { ElementType, HTMLAttributes } from 'react';

export type SkeletonVariant = 'circular' | 'rectangular' | 'rounded' | 'text';

export interface SkeletonProps extends HTMLAttributes<HTMLElement> {
  /**
   * @default 'pulse'
   */
  animation?: false | 'pulse';

  component?: ElementType;

  height?: string | number;

  variant?: SkeletonVariant;

  width?: string | number;
}
