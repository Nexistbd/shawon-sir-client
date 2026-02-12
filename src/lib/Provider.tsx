"use client";

import { ThemeProvider } from "@/components/ui/theme-provider";
import { store } from "@/redux/store";
import { SessionProvider } from "next-auth/react";

import { Provider } from "react-redux";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Provider store={store}>{children}</Provider>
      </ThemeProvider>
    </SessionProvider>
  );
}
