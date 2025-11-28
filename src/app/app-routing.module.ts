import { NgModule } from "@angular/core";
import { RouterModule , Routes } from "@angular/router";
import { MyCalculatorComponent } from "./my-calculator/my-calculator.component";
import { MyEmptyPage } from "./components/empty-route/empty-route.component";

const routes: Routes = [{
    path:'calculator',
    component: MyCalculatorComponent
},
{
    path:'',redirectTo: 'calculator' , pathMatch: 'full'
},
{
    path:'object-list',
    loadChildren: () => import('./object-list/object-list.module').then((m) => m.MyObjectListModule)
},
{
    path:'directives',
    loadChildren: () => import('./directives/directives.module').then((m) => m.DirectiveModule)
},
{
    path:'life-cycle',
    loadChildren: () => import('./components/lifecycle/components/life-cycle.module').then((m) =>m.LifeCycleModule)
},
{
    path:'pipes',
    loadChildren: () => import('./components/pipes/pipes.module').then((m) => m.PipeModule)
},
{
    path:'forms',
    loadChildren: () => import('./forms/forms.module').then((m) => m.FormsUIModule)
},
{
    path:'something',
    component: MyCalculatorComponent,
    children: [
        {
            path:'something/:id'
        }
    ]
},
{
    path: '**',
    component: MyEmptyPage,
}];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule {}