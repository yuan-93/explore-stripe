import type {
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  ElementType,
  PropsWithChildren,
} from "react";

export interface INavigationLink {
  label: string;
  href: string;
}

type AsProp<C extends ElementType> = {
  as?: C;
};

type PropsToOmit<C extends ElementType, P> = keyof (AsProp<C> & P);

// This is the first reusable type utility we built
export type PolymorphicComponentProp<
  C extends ElementType,
  Props = {}
> = PropsWithChildren<Props & AsProp<C>> &
  Omit<ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

// export const Text = <C extends React.ElementType = "span">({
//   as,
//   color,
//   children,
//   // look here
// }: PolymorphicComponentProp<C, TextProps>) => {
//   const Component = as || "span";
//   const style = color ? { style: { color } } : {};
//   return <Component {...style}>{children}</Component>;
// }

// This is the type for the "ref" only
type PolymorphicRef<C extends ElementType> = ComponentPropsWithRef<C>["ref"];

// This is a new type utitlity with ref!
export type PolymorphicComponentPropWithRef<
  C extends ElementType,
  Props = {}
> = PolymorphicComponentProp<C, Props> & { ref?: PolymorphicRef<C> };

/**
 * This is the updated component props using PolymorphicComponentPropWithRef
 */
// type TextProps<C extends React.ElementType> = PolymorphicComponentPropWithRef<
//   C,
//   { color?: Rainbow | "black" }
// >;

/**
 * This is the type used in the type annotation for the component
 */
// type TextComponent = <C extends React.ElementType = "span">(
//   props: TextProps<C>
// ) => React.ReactNode | null;

// export const Text: TextComponent = React.forwardRef(
//   <C extends React.ElementType = "span">(
//     { as, color, children }: TextProps<C>,
//     ref?: PolymorphicRef<C>
//   ) => {
//     const Component = as || "span";

//     const style = color ? { style: { color } } : {};

//     return (
//       <Component {...style} ref={ref}>
//         {children}
//       </Component>
//     );
//   }
// );

// Reference
// https://blog.logrocket.com/build-strongly-typed-polymorphic-components-react-typescript/
