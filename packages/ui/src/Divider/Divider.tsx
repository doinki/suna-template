import type { OverridableComponent } from '@suna/types';
import { forwardRef } from 'react';
import { twJoin } from 'tailwind-merge';

import dividerClasses from './dividerClasses';
import type { DividerProps, DividerTypeMap } from './dividerTypes';

const Divider: OverridableComponent<DividerTypeMap> = forwardRef<
  HTMLHRElement,
  DividerProps
>((props, ref) => {
  const {
    className,
    component: Component = 'hr',
    orientation = 'horizontal',
    ...other
  } = props;

  return (
    <Component
      ref={ref}
      className={twJoin(
        'block',
        dividerClasses.orientations[orientation](),
        className
      )}
      {...other}
    />
  );
});

export default Divider;
