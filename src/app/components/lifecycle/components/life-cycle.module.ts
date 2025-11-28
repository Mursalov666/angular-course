import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LifeCycleRoutingModule } from './life-cycle-routing.module';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LifeCycleRoutingModule,
    ParentComponent,
    ChildComponent
  ],
})
export class LifeCycleModule {}
