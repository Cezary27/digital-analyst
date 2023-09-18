import { Injectable } from '@angular/core';
import { LocalizationType } from '../components/sidebar/toolbar/model/localization-type';

@Injectable({
  providedIn: 'root',
})
export class LocalizationService {
  localizationByUrl: LocalizationType;
  logoUrl: string;

  constructor() {
    this.localizationByUrl =
      localStorage.getItem('localization') != null
        ? (localStorage.getItem('localization')! as LocalizationType)
        : 'brak';

    this.logoUrl =
      localStorage.getItem('logoUrl') != null
        ? localStorage.getItem('logoUrl')!
        : '';
  }

  setLocalization(newLocalization: LocalizationType): void {
    localStorage.setItem('localization', newLocalization);
    this.localizationByUrl = newLocalization;
  }

  getLocalization(): LocalizationType {
    return this.localizationByUrl;
  }

  setLogoUrl(newLogoUrl: string): void {
    localStorage.setItem('logoUrl', newLogoUrl);
    this.logoUrl = newLogoUrl;
  }

  getLogoUrl(): string {
    return this.logoUrl;
  }
}
