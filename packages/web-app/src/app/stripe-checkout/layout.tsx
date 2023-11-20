import Script from "next/script";
import { PropsWithChildren } from "react";

export default function Stripe(props: PropsWithChildren<{}>) {
  return (
    <>
      <>{props.children}</>
      <Script async src="https://js.stripe.com/v3/pricing-table.js" />
    </>
  );
}
