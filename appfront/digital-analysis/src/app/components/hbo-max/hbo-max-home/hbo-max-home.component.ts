import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ContentListService } from 'src/app/service/content-list.service';
import { CONTENT_LIST_HBO_MAX } from './content-list/content-list-hbo-max';

@Component({
  selector: 'app-hbo-max-home',
  templateUrl: './hbo-max-home.component.html',
  styleUrls: ['./hbo-max-home.component.scss'],
})
export class HboMaxHomeComponent implements OnInit {
  constructor(private readonly _contentListService: ContentListService) {
    this._contentListService.pageContentList.next(CONTENT_LIST_HBO_MAX);
  }
  ngOnInit() {}
}
