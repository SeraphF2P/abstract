"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import { Icons } from "@/components/Icons";
import Btn from "@/components/Btn";

export default function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    < >
      
      <Btn onClick={() => setTheme("light")}>
        {/* <Icons.Sun className="mr-2 h-4 w-4" /> */}
        <span>Light</span>
      </Btn>
      <Btn onClick={() => setTheme("dark")}>
        {/* <Icons.Moon className="mr-2 h-4 w-4" /> */}
        <span>Dark</span>
      </Btn>
      <Btn onClick={() => setTheme("system")}>
        {/* <Icons.System className="mr-2 h-4 w-4" /> */}
        <span>System</span>
      </Btn>
    </>
  );
}
