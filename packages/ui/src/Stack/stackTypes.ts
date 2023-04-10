import type { OverrideProps } from '@suna/types';
import type { ElementType, ReactNode } from 'react';

export type StackDirection =
  | 'column'
  | 'column-reverse'
  | 'row'
  | 'row-reverse';

export interface StackTypeMap<P = {}, D extends ElementType = 'div'> {
  defaultComponent: D;
  props: P & {
    /**
     * @default 'div'
     */
    component?: ElementType;

    /**
     * @default 'column'
     */
    direction?: StackDirection;

    divider?: ReactNode;
  };
}

export type StackProps<
  P = {},
  D extends ElementType = StackTypeMap['defaultComponent']
> = OverrideProps<StackTypeMap<P, D>, D>;
