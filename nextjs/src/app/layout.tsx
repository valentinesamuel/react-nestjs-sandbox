import type { Metadata } from "next";
import { Provider } from "react-redux";
import { Inter } from "next/font/google";
import "./globals.css";
import { makeStore } from "@/lib/store";
import StoreProvider from "./StoreProvider";
import PersistStoreProvider from "./PersistStoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          {/* <PersistStoreProvider> */}
          {children}
          {/* </PersistStoreProvider> */}
        </StoreProvider>
      </body>
    </html>
  );
}
