import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CommonInfoService} from '../services';
import {HistoryService} from '../services';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [],
  declarations: [],
  providers: [
    CommonInfoService,
    HistoryService
  ]
})
export class CoreModule {
}
