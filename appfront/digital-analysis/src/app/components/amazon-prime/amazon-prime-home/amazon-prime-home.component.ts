import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ContentListService } from 'src/app/service/content-list.service';
import { CONTENT_LIST_AMAZON_PRIME } from './content-list/content-list-amazon-prime';

@Component({
  selector: 'app-amazon-prime-home',
  templateUrl: './amazon-prime-home.component.html',
  styleUrls: ['./amazon-prime-home.component.scss'],
})
export class AmazonPrimeHomeComponent implements OnInit {
  constructor(private readonly _contentListService: ContentListService) {
    this._contentListService.pageContentList.next(CONTENT_LIST_AMAZON_PRIME);
  }
  ngOnInit() {}
}
