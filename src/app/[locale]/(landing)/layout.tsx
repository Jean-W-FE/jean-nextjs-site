import * as React from "react";
import { Header } from '@/components/nav/header';
import Footer from '@/components/nav/footer';
import BackgroundDecorations from "@/components/shared/BackgroundDecorations";
export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className="min-h-screen bg-theme-gradient">
      <Header />
       <main>{children}</main>
      <Footer />
      {/* Background Decorations */}
      <BackgroundDecorations variant="default" />
    </div>
  );
}