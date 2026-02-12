"use client";

import { ThemeProvider } from "@/components/ui/theme-provider";
import { store } from "@/redux/store";

import { Provider } from "react-redux";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <Provider store={store}>{children}</Provider>
    </ThemeProvider>
  );
}
