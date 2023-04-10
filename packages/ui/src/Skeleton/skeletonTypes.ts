import type { OverrideProps } from '@suna/types';
import type { ElementType } from 'react';

export type SkeletonAnimation = 'pulse';
export type SkeletonVariant = 'circular' | 'rectangular' | 'rounded' | 'text';

export interface SkeletonTypeMap<P = {}, D extends ElementType = 'span'> {
  defaultComponent: D;
  props: P & {
    /**
     * @default 'pulse'
     */
    animation?: SkeletonAnimation | false;

    /**
     * @default 'span'
     */
    component?: ElementType;

    height?: number | string;

    /**
     * @default 'text'
     */
    variant?: SkeletonVariant;

    width?: number | string;
  };
}

export type SkeletonProps<
  P = {},
  D extends ElementType = SkeletonTypeMap['defaultComponent']
> = OverrideProps<SkeletonTypeMap<P, D>, D>;
