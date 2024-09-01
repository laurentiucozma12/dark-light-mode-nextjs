"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";

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
      {currentTheme === "dark" ? (
        <DarkModeOutlinedIcon />
      ) : (
        <LightModeOutlinedIcon />
      )}
    </IconButton>
  );
}
