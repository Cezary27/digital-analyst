import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { ContentListService } from 'src/app/service/content-list.service';
import { PageContent } from './model/page-content';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content-navbar',
  templateUrl: './content-navbar.component.html',
  styleUrls: ['./content-navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentNavbarComponent {
  pageContentList: PageContent[] =
    this._contentListService.pageContentListInitValue;

  constructor(
    private readonly _contentListService: ContentListService,
    private readonly _router: Router,
    private readonly _changeDetectorRef: ChangeDetectorRef
  ) {
    this._contentListService.pageContentList
      .asObservable()
      .subscribe((newPageContentList) => {
        this.pageContentList = newPageContentList;
        this._changeDetectorRef.markForCheck();
      });
  }

  onContentClick(content: PageContent): void {
    const urlTree = this._router.createUrlTree([content.url], {
      queryParams: { type: content.type },
    });

    this._router.navigateByUrl(urlTree);
  }
}
