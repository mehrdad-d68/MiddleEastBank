import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataTableComponent } from './data-table.component';
import {DetailComponent} from './detail/detail.component'


@NgModule({
  declarations: [
    DataTableComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[DataTableComponent]
})
export class DataTableModule { }
