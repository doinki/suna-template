import type { ComponentPropsWithRef, CSSProperties, ElementType } from 'react';

export type DistributiveOmit<T, K extends keyof any> = T extends any
  ? Omit<T, K>
  : never;

export interface CommonProps {
  className?: string;
  style?: CSSProperties;
}

export interface OverridableTypeMap {
  defaultComponent: ElementType;
  props: {};
}

export type BaseProps<M extends OverridableTypeMap> = M['props'] & CommonProps;

export type OverrideProps<
  M extends OverridableTypeMap,
  C extends ElementType
> = BaseProps<M> &
  DistributiveOmit<ComponentPropsWithRef<C>, keyof BaseProps<M>>;

export type DefaultComponentProps<M extends OverridableTypeMap> = BaseProps<M> &
  DistributiveOmit<
    ComponentPropsWithRef<M['defaultComponent']>,
    keyof BaseProps<M>
  >;

export interface OverridableComponent<M extends OverridableTypeMap> {
  <C extends ElementType>(
    props: { component: C } & OverrideProps<M, C>
  ): JSX.Element | null;
  (props: DefaultComponentProps<M>): JSX.Element | null;
}
