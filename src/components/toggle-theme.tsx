"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ToggleTheme() {
  const { theme, setTheme } = useTheme();

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      {isLoaded ? (
        <Button
          variant="outline"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? (
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          ) : (
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
      ) : (
        <div className="h-6 w-6 animate-pulse rounded-full bg-gray-300 dark:bg-gray-800"></div>
      )}
    </>
  );
}
