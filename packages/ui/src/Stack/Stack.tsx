import { Children, forwardRef } from 'react';
import { twJoin } from 'tailwind-merge';

import type { OverridableComponent } from '../types';
import stackClasses from './stackClasses';
import type { StackProps, StackTypeMap } from './stackTypes';

const Stack: OverridableComponent<StackTypeMap> = forwardRef<
  HTMLDivElement,
  StackProps
>((props, ref) => {
  const {
    children,
    className,
    component: Component = 'div',
    direction = 'column',
    divider,
    ...other
  } = props;

  return (
    <Component
      ref={ref}
      className={twJoin(
        'flex',
        stackClasses.directions[direction](),
        className
      )}
      {...other}
    >
      {divider
        ? Children.map(children, (child, index) =>
            index === 0 ? child : [divider, child]
          )
        : children}
    </Component>
  );
});

export default Stack;
