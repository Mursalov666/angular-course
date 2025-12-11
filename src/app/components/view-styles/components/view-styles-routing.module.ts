import { provideRouter, Routes } from '@angular/router';
import { ViewFooComponent } from './view-foo/view-foo.component';
import { ViewBarComponent } from './view-bar/view-bar.component';

const viewStylesRoutes: Routes = [
  { path: 'foo', component: ViewFooComponent },
  { path: 'bar', component: ViewBarComponent },
];

export const ViewStylesRouting = provideRouter(viewStylesRoutes);
