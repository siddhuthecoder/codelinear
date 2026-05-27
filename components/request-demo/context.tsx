"use client";

import { createContext, useContext, useState } from "react";

type RequestDemoContextValue = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

const RequestDemoContext = createContext<RequestDemoContextValue>({
  isOpen: false,
  open: () => {},
  close: () => {},
});

export function RequestDemoProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <RequestDemoContext.Provider
      value={{ isOpen, open: () => setIsOpen(true), close: () => setIsOpen(false) }}
    >
      {children}
    </RequestDemoContext.Provider>
  );
}

export function useRequestDemo() {
  return useContext(RequestDemoContext);
}
