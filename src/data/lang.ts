import { persistentAtom } from '@nanostores/persistent';
import { derived } from 'svelte/store';

enum LanguageCode {
  DE = 'de',
  EN = 'en',
  ZH_HANT = 'zh-Hant'
}

interface Language {
  code: LanguageCode;
  icon: string;
  native_name: string;
}

export const languages: Record<LanguageCode, Language> = {
  de: { code: LanguageCode.DE, icon: '🇩🇪', native_name: 'Deutsch' },
  en: { code: LanguageCode.EN, icon: '🇬🇧', native_name: 'English' },
  'zh-Hant': { code: LanguageCode.ZH_HANT, icon: '🇨🇳', native_name: '繁體中文' }
};

export const language_code = persistentAtom<LanguageCode>('language', LanguageCode.EN);
export const language = derived(language_code, ($language_code) => {
  languages[$language_code];
});
