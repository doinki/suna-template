import type { OverridableComponent } from '@suna/types';
import { Children, cloneElement, forwardRef } from 'react';
import { twJoin } from 'tailwind-merge';

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
        ? Children.toArray(children)
            .filter(Boolean)
            .map((child, index) =>
              index === 0
                ? child
                : // eslint-disable-next-line react/no-array-index-key
                  [cloneElement(divider, { key: `separator-${index}` }), child]
            )
        : children}
    </Component>
  );
});

export default Stack;
