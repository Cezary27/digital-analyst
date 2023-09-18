import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MATERIALS_SIDEBAR } from './materials-sidebar';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentNavbarComponent } from './navbar/content-navbar/content-navbar/content-navbar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  imports: [CommonModule, MATERIALS_SIDEBAR, AppRoutingModule],
  declarations: [NavbarComponent, ContentNavbarComponent, ToolbarComponent],
  exports: [NavbarComponent],
})
export class SidebarModule {}
