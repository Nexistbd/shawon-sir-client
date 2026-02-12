"use client";

import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
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

export function LoginSheetProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    // Auto-open sheet if login=true in URL
    if (searchParams.get("login") === "true") {
      setIsOpen(true);
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
            <SheetTitle>শাওন স্যারের সাথে শুরু করুন </SheetTitle>
          </SheetHeader>
          <div className="p-6">
            <Login />
          </div>
        </SheetContent>
      </Sheet>
    </LoginSheetContext.Provider>
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

// Login Button Component - wraps any child in a button that opens the sheet
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
