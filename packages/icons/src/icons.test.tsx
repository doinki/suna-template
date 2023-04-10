import { render } from '@testing-library/react';

import * as icons from '.';

Object.entries(icons).forEach(([name, Icon]) => {
  describe(`<${name} />`, () => {
    test('snapshot', () => {
      const {
        container: { firstChild: icon },
      } = render(<Icon />);

      expect(icon).toMatchSnapshot();
    });
  });
});
