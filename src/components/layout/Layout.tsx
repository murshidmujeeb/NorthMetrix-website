import { ReactNode } from "react";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
  enableSnap?: boolean;
}

export function Layout({ children, enableSnap = false }: LayoutProps) {
  return (
    <div
      id="scroll-container"
      className={`min-h-screen flex flex-col`}
    >
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
