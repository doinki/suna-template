import { render, screen } from '@testing-library/react';
import { twJoin } from 'tailwind-merge';

import type { SkeletonVariant } from '../src';
import { Skeleton, skeletonClasses } from '../src';

const testId = 'skeleton';

describe('<Skeleton />', () => {
  describe('variant', () => {
    const table = Object.entries(skeletonClasses.variants)
      .map(([variant, fn]) => [variant, fn()])
      .filter(([, expected]) => expected);

    test.each(table)('"%s"', (variant, expected) => {
      render(
        <Skeleton data-testid={testId} variant={variant as SkeletonVariant} />
      );
      expect(screen.getByTestId(testId)).toHaveClass(twJoin(expected));
    });
  });

  describe('animation', () => {
    test('false', () => {
      render(<Skeleton animation={false} data-testid={testId} />);

      Object.values(skeletonClasses.animations).forEach((fn) => {
        expect(screen.getByTestId(testId)).not.toHaveClass(twJoin(fn()));
      });
    });
  });

  describe('height, width', () => {
    test('120', () => {
      const height = 120;
      const width = 120;

      render(
        <Skeleton
          data-testid={testId}
          height={height}
          variant="rounded"
          width={width}
        />
      );

      expect(screen.getByTestId(testId)).toHaveStyle({
        height: `${height}px`,
        width: `${width}px`,
      });
    });
  });
});
