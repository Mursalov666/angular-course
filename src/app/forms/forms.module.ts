import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsComponent } from './components/forms/forms.component.js';
import { FormsRoutingModule } from './forms-routing.module.js';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RateComponent } from './components/rate/rate.component.js';

@NgModule({
  imports: [
    CommonModule,
    FormsRoutingModule,
    FormsComponent,
    ReactiveFormsModule,
    FormsModule,
    RateComponent
  ],
  exports: [],
  declarations: [],
  providers: [],
})
export class FormsUIModule {}
