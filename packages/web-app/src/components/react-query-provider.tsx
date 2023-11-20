"use client";
import { QueryClient, QueryClientProvider } from "react-query";
import { PropsWithChildren, memo } from "react";

const queryClient = new QueryClient();

function ReactQueryProvider(props: PropsWithChildren<{}>) {
  return (
    <QueryClientProvider client={queryClient}>
      {props.children}
    </QueryClientProvider>
  );
}

export default memo(ReactQueryProvider);
