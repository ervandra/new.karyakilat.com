"use client";

import * as React from "react";

interface LeadCaptureContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const LeadCaptureContext = React.createContext<LeadCaptureContextType | undefined>(undefined);

export function LeadCaptureProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = React.useState(false);

  const openModal = React.useCallback(() => setIsOpen(true), []);
  const closeModal = React.useCallback(() => setIsOpen(false), []);

  return (
    <LeadCaptureContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </LeadCaptureContext.Provider>
  );
}

export function useLeadCapture() {
  const context = React.useContext(LeadCaptureContext);
  if (context === undefined) {
    throw new Error("useLeadCapture must be used within a LeadCaptureProvider");
  }
  return context;
}
