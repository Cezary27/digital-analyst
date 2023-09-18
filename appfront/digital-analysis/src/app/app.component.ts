import { Component } from '@angular/core';
import { ContentListService } from './service/content-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'digital-analysis';

  constructor(private readonly _contentListService: ContentListService) {
    this._contentListService.setInitContentList();
  }
}
