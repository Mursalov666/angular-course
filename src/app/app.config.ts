import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { MyCalculatorComponent } from './my-calculator/my-calculator.component';
import { MyEmptyPage } from './components/empty-route/empty-route.component';
import { DirectivesPageComponent } from './directives/directives.component';
import { ParentComponent } from './components/lifecycle/components/parent/parent.component';
import { PipesComponent } from './components/pipes/components/pipes/pipes.component';
import { FormsComponent } from './forms/components/forms/forms.component';
import { DecoratorsPageComponent } from './decorators/component/decorators-page/decorators-page.component';
import { LeaveGuard } from './leave.guard';
import { ViewFooComponent } from './components/view-styles/components/view-foo/view-foo.component';

export const routes: Routes = [
  { path: 'calculator', component: MyCalculatorComponent, canDeactivate:[LeaveGuard] },

  {
    path: 'object-list',
    loadChildren: () =>
      import('./object-list/object-list.routes').then(
        (m) => m.OBJECT_LIST_ROUTES
      ),
  },
  {
    path: 'view-foo', component: ViewFooComponent
  },
  { path: 'life-cycle', component: ParentComponent },
  { path: 'directives', component: DirectivesPageComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'forms', component: FormsComponent },

  { path: 'decorators-page', component: DecoratorsPageComponent },

  { path: '', redirectTo: 'calculator', pathMatch: 'full' },

  { path: '**', component: MyEmptyPage },
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};
