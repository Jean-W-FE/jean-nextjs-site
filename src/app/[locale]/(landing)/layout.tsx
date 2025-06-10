import * as React from "react";
import { Header } from '@/components/nav/header';
import Footer from '@/components/nav/footer';

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