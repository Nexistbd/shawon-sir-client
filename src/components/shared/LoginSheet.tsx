"use client";

import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
  Suspense,
} from "react";
import { useSearchParams } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import Login from "./Login";

// Create a context to manage the sheet state
interface LoginSheetContextType {
  isOpen: boolean;
  openLogin: () => void;
  closeLogin: () => void;
}

const LoginSheetContext = createContext<LoginSheetContextType | undefined>(
  undefined,
);

// Inner component that uses useSearchParams
function LoginSheetContent({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    // Check for login_redirect cookie
    const getCookie = (name: string) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop()?.split(";").shift();
    };

    const deleteCookie = (name: string) => {
      document.cookie = `${name}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    };

    const loginCookie = getCookie("login_redirect");

    // Auto-open sheet if login=true in URL or cookie exists
    if (searchParams.get("login") === "true" || loginCookie === "true") {
      setIsOpen(true);
      if (loginCookie) {
        deleteCookie("login_redirect");
      }
    }
  }, [searchParams]);

  const openLogin = () => setIsOpen(true);
  const closeLogin = () => setIsOpen(false);

  return (
    <LoginSheetContext.Provider value={{ isOpen, openLogin, closeLogin }}>
      {children}
      {/* Login Sheet */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent side="right" className="w-full sm:max-w-md p-0">
          <SheetHeader className="p-6 pb-0">
            <SheetTitle>লগইন</SheetTitle>
          </SheetHeader>
          <div className="p-6">
            <Login />
          </div>
        </SheetContent>
      </Sheet>
    </LoginSheetContext.Provider>
  );
}

// Fallback provider for SSR (doesn't render sheet until hydrated)
function LoginSheetFallback({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openLogin = () => setIsOpen(true);
  const closeLogin = () => setIsOpen(false);

  return (
    <LoginSheetContext.Provider value={{ isOpen, openLogin, closeLogin }}>
      {children}
    </LoginSheetContext.Provider>
  );
}

export function LoginSheetProvider({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={<LoginSheetFallback>{children}</LoginSheetFallback>}>
      <LoginSheetContent>{children}</LoginSheetContent>
    </Suspense>
  );
}

// Hook to use the login sheet
export function useLoginSheet() {
  const context = useContext(LoginSheetContext);
  if (!context) {
    throw new Error("useLoginSheet must be used within LoginSheetProvider");
  }
  return context;
}

// Login Button Component
interface LoginButtonProps {
  children: ReactNode;
  className?: string;
}

export function LoginButton({ children, className = "" }: LoginButtonProps) {
  const { openLogin } = useLoginSheet();

  return (
    <button onClick={openLogin} className={className}>
      {children}
    </button>
  );
}
