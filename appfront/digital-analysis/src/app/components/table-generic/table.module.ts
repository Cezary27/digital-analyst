import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { TableComponent } from '../table/table.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { TableGenericComponent } from './table-generic.component';

const MATERIALS = [
  MatPaginatorModule,
  MatTableModule,
  MatSortModule,
  MatInputModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
];

@NgModule({
  imports: [CommonModule, MATERIALS],
  declarations: [TableComponent, TableGenericComponent],
  exports: [TableGenericComponent],
})
export class TableModule {}
