import { PolymorphicComponentProp } from "@/types";
import clsx from "clsx";
import { ElementType, memo } from "react";

export interface ITextProps {
  size?: keyof typeof sizeVariants;
  className?: string;
}

const sizeVariants = {
  "display-large": clsx(
    "text-6xl font-black uppercase",
    "sm:text-7xl",
    "md:text-8xl",
    "lg:text-9xl"
  ),
  "display-medium": clsx(
    "text-5xl font-black uppercase",
    "sm:text-6xl",
    "md:text-7xl",
    "lg:text-8xl"
  ),
  "display-small": clsx(
    "text-4xl font-black uppercase",
    "sm:text-5xl",
    "md:text-6xl",
    "lg:text-7xl"
  ),
  "headline-large": clsx(
    "text-5xl font-medium",
    "sm:text-6xl",
    "md:text-7xl",
    "lg:text-8xl"
  ),
  "headline-medium": clsx(
    "text-4xl font-medium",
    "sm:text-5xl",
    "md:text-6xl",
    "lg:text-7xl"
  ),
  "headline-small": clsx(
    "text-3xl font-medium",
    "sm:text-4xl",
    "md:text-5xl",
    "lg:text-6xl"
  ),
  "title-large": clsx(
    "text-xl font-bold",
    "sm:text-2xl",
    "md:text-3xl",
    "lg:text-4xl"
  ),
  "title-medium": clsx(
    "text-lg font-bold",
    "sm:text-xl",
    "md:text-2xl",
    "lg:text-3xl"
  ),
  "title-small": clsx(
    "text-base font-bold",
    "sm:text-lg",
    "md:text-xl",
    "lg:text-2xl"
  ),
  "label-large": "text-lg font-medium",
  "label-medium": "text-base font-medium",
  "label-small": "text-sm font-medium",
  "body-large": "text-lg font-normal text-neutral-600",
  "body-medium": "text-base font-normal text-neutral-600",
  "body-small": "text-sm font-normal text-neutral-600",
};

function Text<C extends ElementType = "span">({
  as,
  size = "body-medium",
  children,
  className,
  ...rest
}: PolymorphicComponentProp<C, ITextProps>) {
  const Component = as || "span";

  return (
    <Component
      size={size}
      className={clsx(`${sizeVariants[size]}`, className)}
      {...rest}
    >
      {children}
    </Component>
  );
}

export default memo(Text);
