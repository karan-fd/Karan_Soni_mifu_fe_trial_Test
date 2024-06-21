"use client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

export const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <ChakraProvider
        theme={extendTheme({
          shadows: {},
        })}
      >
        {children}
      </ChakraProvider>
    </QueryClientProvider>
  );
};
