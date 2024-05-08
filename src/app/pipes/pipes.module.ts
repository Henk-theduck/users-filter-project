import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { PhonePipe } from './phone.pipe';
import { AddressPipe } from './address.pipe';
import { StatusPipe } from './status.pipe';
import { DashIfEmptyPipe } from './dash-if-empty.pipe';

@NgModule({
  declarations: [PhonePipe, AddressPipe, StatusPipe, DashIfEmptyPipe],
  imports: [CommonModule],
  exports: [PhonePipe, AddressPipe, StatusPipe, CommonModule, DashIfEmptyPipe],
})
export class PipesModule { }
