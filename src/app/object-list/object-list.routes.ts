import { Routes } from '@angular/router';
import { MyObjectListComponent } from './components/list/object-list.component';
import { MyObjectItemComponent } from './components/item/object-item.component';

export const OBJECT_LIST_ROUTES: Routes = [
  { path: '', component: MyObjectListComponent },
  { path: ':id', component: MyObjectItemComponent },
];
