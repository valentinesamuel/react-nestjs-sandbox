"use client";
import { persistor } from "@/lib/store";
import { PersistGate } from "redux-persist/integration/react";
export default function PersistStoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PersistGate loading={null} persistor={persistor}>
      {children}
    </PersistGate>
  );
}
