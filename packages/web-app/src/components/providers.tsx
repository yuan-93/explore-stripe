import { PropsWithChildren, memo } from "react";
import ReactQueryProvider from "./react-query-provider";

function Providers(props: PropsWithChildren<{}>) {
  return <ReactQueryProvider>{props.children}</ReactQueryProvider>;
}

export default memo(Providers);
