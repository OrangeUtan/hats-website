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
  de: { code: LanguageCode.DE, icon: 'π©πͺ', native_name: 'Deutsch' },
  en: { code: LanguageCode.EN, icon: 'π¬π§', native_name: 'English' },
  'zh-Hant': { code: LanguageCode.ZH_HANT, icon: 'π¨π³', native_name: 'ηΉι«δΈ­ζ' }
};

export const language_code = persistentAtom<LanguageCode>('language', LanguageCode.EN);
export const language = derived(language_code, ($language_code) => {
  languages[$language_code];
});
