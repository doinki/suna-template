import type { ElementType } from 'react';

import type { OverrideProps } from '../types';

export type DividerOrientation = 'horizontal' | 'vertical';

export interface DividerTypeMap<P = {}, D extends ElementType = 'hr'> {
  defaultComponent: D;
  props: P & {
    /**
     * @default 'hr'
     */
    component?: ElementType;

    /**
     * @default 'horizontal'
     */
    orientation?: DividerOrientation;
  };
}

export type DividerProps<
  P = {},
  D extends ElementType = DividerTypeMap['defaultComponent']
> = OverrideProps<DividerTypeMap<P, D>, D>;
