import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DirectivesPageComponent } from './directives.component';
import { DirectivesRoutingModule } from './directives-routing.module';
import { MyChangeColorDirectiveDirective } from './my-change-color-directive.directive';
import { MyIfDirectiveDirective } from './my-if-directive.directive';

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,                     
    DirectivesRoutingModule,          
    DirectivesPageComponent,          
    MyChangeColorDirectiveDirective,
    MyIfDirectiveDirective   
  ],
  exports: [
    DirectivesPageComponent,          
    MyChangeColorDirectiveDirective   
  ]
})
export class DirectiveModule {}
