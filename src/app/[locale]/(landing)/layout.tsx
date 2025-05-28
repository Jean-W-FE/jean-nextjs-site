import * as React from "react";
import { Footer } from  "@/components/nav/footer";
import { Header } from "@/components/nav/header";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
    </div>
  );
}