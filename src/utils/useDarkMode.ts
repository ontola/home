import { Dispatch, useEffect, useState } from 'react';

import { useLocalStorage } from './useLocalStorage';

export enum DarkModeOption {
  /** Always use dark mode */
  always = 'always',
  /** Never use dark mode, always light */
  never = 'never',
  /** Use OS / Browser setting */
  auto = 'auto',
}

function checkPrefersDark() {
  if (typeof window !== 'undefined') {
    const hasDark =
      window?.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;

    return hasDark;
  }
  return false;
}

/**
 * A hook for using dark mode. Sets using local storage. The second argument can
 * be called with true, false or undefined (which uses the OS default)
 */
export const useDarkMode = (): [
  boolean,
  Dispatch<boolean | undefined>,
  DarkModeOption
] => {
  const [dark, setDark] = useState(checkPrefersDark());
  const [darkLocal, setDarkLocal] = useLocalStorage<DarkModeOption>(
    'darkMode',
    DarkModeOption.auto
  );

  /** True, false or auto (if undefined) */
  function setDarkBoth(a?: boolean) {
    if (a === undefined) {
      setDark(checkPrefersDark());
      setDarkLocal(DarkModeOption.auto);
    } else if (a === true) {
      setDark(a);
      setDarkLocal(DarkModeOption.always);
    } else if (a === false) {
      setDark(a);
      setDarkLocal(DarkModeOption.never);
    }
  }

  if (typeof window !== 'undefined') {
    // Is called when user changes color scheme
    window
      ?.matchMedia('(prefers-color-scheme: dark)')
      ?.addEventListener('change', (e) => {
        setDarkBoth(!!e.matches);
      });
  }

  useEffect(() => {
    if (darkLocal === DarkModeOption.auto) {
      setDark(checkPrefersDark());
    } else if (darkLocal === DarkModeOption.always) {
      setDark(true);
    } else if (darkLocal === DarkModeOption.never) {
      setDark(false);
    }
  }, [darkLocal]);

  return [dark, setDarkBoth, darkLocal];
};
