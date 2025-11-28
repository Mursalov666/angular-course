import { NgModule } from '@angular/core';
import { PipesComponent } from './components/pipes/pipes.component';
import { CommonModule } from '@angular/common';
import { PipesRoutingModule } from './pipes-routing.module';
import { MyCustomPipe } from './pipe/my-custom.pipe';

@NgModule({
    imports: [CommonModule, PipesComponent, PipesRoutingModule, MyCustomPipe],
    exports: [],
    declarations: [],
    providers: [],
})
export class PipeModule { }
