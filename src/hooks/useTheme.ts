import { useCallback, useEffect, useState } from 'react';
import { DarkTheme, LightTheme, type ThemeConfig, type ThemeMode } from '@types';

const THEME_CLASS = 'theme-dark';

function applyThemeMode(mode: ThemeMode): void {
  if (typeof document === 'undefined') return;
  document.documentElement.classList.toggle(THEME_CLASS, mode === 'dark');
}

export function useTheme(initialMode: ThemeMode = 'light') {
  const [mode, setMode] = useState<ThemeMode>(initialMode);
  const theme: ThemeConfig = mode === 'dark' ? DarkTheme : LightTheme;

  useEffect(() => {
    applyThemeMode(mode);
  }, [mode]);

  const toggle = useCallback(() => {
    setMode((current) => (current === 'light' ? 'dark' : 'light'));
  }, []);

  return { mode, theme, setMode, toggle };
}
