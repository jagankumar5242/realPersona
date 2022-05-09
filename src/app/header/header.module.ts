import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopMarginComponent } from './top-margin/top-margin.component';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    TopMarginComponent,
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
  ]
})
export class HeaderModule { }
