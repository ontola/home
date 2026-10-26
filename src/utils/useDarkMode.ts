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
  DarkModeOption,
] => {
  const [prefersDark, setPrefersDark] = useState(checkPrefersDark());
  const [darkLocal, setDarkLocal] = useLocalStorage<DarkModeOption>(
    'darkMode',
    DarkModeOption.auto
  );

  // Follow the OS colour scheme while it changes. Only applies in auto mode.
  useEffect(() => {
    const query = window?.matchMedia?.('(prefers-color-scheme: dark)');
    if (!query) return undefined;
    const onChange = (e: MediaQueryListEvent) => setPrefersDark(e.matches);
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  /** True, false or auto (if undefined) */
  function setDarkBoth(a?: boolean) {
    if (a === undefined) {
      setDarkLocal(DarkModeOption.auto);
    } else if (a === true) {
      setDarkLocal(DarkModeOption.always);
    } else if (a === false) {
      setDarkLocal(DarkModeOption.never);
    }
  }

  let dark = prefersDark;
  if (darkLocal === DarkModeOption.always) {
    dark = true;
  } else if (darkLocal === DarkModeOption.never) {
    dark = false;
  }

  return [dark, setDarkBoth, darkLocal];
};
