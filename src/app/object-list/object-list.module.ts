import { NgModule } from '@angular/core';
import { MyObjectListComponent } from './components/list/object-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { MyObjectItemComponent } from './components/item/object-item.component';
import { MyObjectListRouting } from './object-list-routing.module';

@NgModule({
  imports: [BrowserModule, MyObjectListComponent, MyObjectItemComponent, MyObjectListRouting],
  exports: [MyObjectListComponent, MyObjectItemComponent],
  declarations: [],
  providers: [],
})
export class MyObjectListModule {}