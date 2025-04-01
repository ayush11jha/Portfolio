"use client";

import { Education } from "@/components/Education";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProject";
import Skills from "@/components/Skills";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
      <FloatingNav navItems={navItems} />
      <ErrorBoundary><Hero /></ErrorBoundary>
      <ErrorBoundary><Grid /></ErrorBoundary>
      <ErrorBoundary><RecentProjects /></ErrorBoundary>
      <ErrorBoundary><Skills /></ErrorBoundary>
      <ErrorBoundary><Education /></ErrorBoundary>
      <ErrorBoundary><Footer /></ErrorBoundary>
      </div>
    </main>
  );
}

const ErrorBoundary = ({ children }: { children: React.ReactNode }) => {
  try {
    return <>{children}</>;
  } catch (error) {
    console.error("Component Error:", error);
    return <div>Error loading component.</div>;
  }
};
