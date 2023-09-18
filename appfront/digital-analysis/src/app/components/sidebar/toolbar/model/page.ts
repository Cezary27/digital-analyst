import { LocalizationType } from './localization-type';

export interface Page {
  name: string;
  logoLink: string;
  url: string;
  localization: LocalizationType;
}
