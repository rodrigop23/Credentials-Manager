"use client";

import ToggleTheme from "@/components/toggle-theme";
import { SignUp } from "@clerk/nextjs";

import { useTheme } from "next-themes";
import { dark } from "@clerk/themes";

export default function Page() {
  const { theme } = useTheme();

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="relative flex flex-row">
        <SignUp
          appearance={{
            baseTheme: theme === "dark" ? dark : undefined,
          }}
        />

        <div className="absolute top-3 right-3 z-50">
          <ToggleTheme />
        </div>
      </div>
    </div>
  );
}
