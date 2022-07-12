import { writable } from 'svelte/store';

enum LanguageCode {
  de = 'de',
  en = 'en'
}

interface Language {
  code: LanguageCode;
  icon: string;
  name: string;
}

export const languages: Record<LanguageCode, Language> = {
  de: { code: LanguageCode.de, icon: '🇩🇪', name: 'German' },
  en: { code: LanguageCode.en, icon: '🇬🇧', name: 'English' }
};

export const language = writable(languages[LanguageCode.de]);

export function setLanguage(code: LanguageCode) {
  language.set(languages[code]);
}
