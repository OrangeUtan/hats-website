import { persistentAtom } from '@nanostores/persistent';

export enum Theme {
  AUTO = 'auto',
  LIGHT = 'light',
  DARK = 'dark'
}

export const theme = persistentAtom<Theme>('theme', Theme.AUTO);

export function toggleTheme() {
  switch (theme.get()) {
    case Theme.AUTO:
      theme.set(Theme.DARK);
      break;
    case Theme.DARK:
      theme.set(Theme.LIGHT);
      break;
    case Theme.LIGHT:
      theme.set(Theme.AUTO);
      break;
  }
}
