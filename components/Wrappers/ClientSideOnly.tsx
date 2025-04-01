"use client"; // Mark this file as a client component

import { useEffect, useState } from "react";

export default function ClientSideOnly({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null; // Prevent SSR issues

  return <>{children}</>;
}
