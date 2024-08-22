"use client";

import ToggleTheme from "@/components/toggle-theme";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="relative flex flex-row">
        <SignIn />

        <div className="absolute top-3 right-3 z-50">
          <ToggleTheme />
        </div>
      </div>
    </div>
  );
}
