import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { PAGES } from './model/pages';
import { Page } from './model/page';
import { Router } from '@angular/router';
import { LocalizationService } from 'src/app/service/localization.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarComponent implements OnInit {
  @Output() isToggleEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  isToggle: boolean = true;

  imageSrc: string = '';
  pagesForView: Page[] = PAGES;

  constructor(
    private readonly _router: Router,
    private readonly _changeDetectorRef: ChangeDetectorRef,
    private readonly _localizationService: LocalizationService
  ) {}

  ngOnInit(): void {
    this.imageSrc = this._localizationService.getLogoUrl();
  }

  onToolBarToggle(): void {
    this.isToggle = !this.isToggle;
    this.isToggleEvent.emit(this.isToggle);
  }

  onMenuSelect(page: Page): void {
    this._localizationService.setLocalization(page.localization);
    this._localizationService.setLogoUrl(page.logoLink);
    this.imageSrc = page.logoLink;
    this._changeDetectorRef.markForCheck();
    this._router.navigateByUrl(page.url);
  }
}
