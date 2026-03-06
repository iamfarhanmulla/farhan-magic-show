"use client";

import { useTheme } from "next-themes";
import { lazy, Suspense, useEffect, useState } from "react";

const StarBackgroundCanvas = lazy(() => import("./star-background-canvas"));

export function StarsCanvas() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Suspense fallback={null}>
      <StarBackgroundCanvas isDark={theme === "dark"} />
    </Suspense>
  );
}
