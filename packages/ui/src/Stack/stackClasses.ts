import type { ClassNameValue } from '@suna/types';

import type { StackDirection } from './stackTypes';

const directions: Record<StackDirection, () => ClassNameValue> = {
  column: () => 'flex-col',
  'column-reverse': () => 'flex-col-reverse',
  row: () => 'flex-row',
  'row-reverse': () => 'flex-row-reverse',
};

const stackClasses = { directions };

export default stackClasses;
