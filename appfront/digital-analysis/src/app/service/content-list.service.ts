import { Injectable } from '@angular/core';
import { PageContent } from '../components/sidebar/navbar/content-navbar/content-navbar/model/page-content';
import { Subject } from 'rxjs';
import { LocalizationService } from './localization.service';
import { CONTENT_LIST_NETFLIX } from '../components/netflix/netflix-home/content-list/content-list-netflix';

@Injectable({
  providedIn: 'root',
})
export class ContentListService {
  pageContentList: Subject<PageContent[]> = new Subject();
  pageContentListInitValue: PageContent[] = [];
  constructor(private readonly _localizationService: LocalizationService) {}

  setInitContentList(): void {
    switch (this._localizationService.getLocalization()) {
      case 'netflix': {
        this.pageContentListInitValue = CONTENT_LIST_NETFLIX;
        break;
      }
      case 'amazonPrime': {
        break;
      }

      case 'hboMax': {
        break;
      }
      default: {
        break;
      }
    }
  }
}
