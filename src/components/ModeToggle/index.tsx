"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import { Brightness4, Brightness7 } from "@mui/icons-material";

export function ModeToggle() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <IconButton
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      color="inherit"
    >
      {currentTheme === "dark" ? <Brightness4 /> : <Brightness7 />}
    </IconButton>
  );
}
