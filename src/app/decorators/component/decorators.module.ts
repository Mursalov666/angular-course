import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DecoratorsPageComponent } from './decorators-page/decorators-page.component';
import { DecoratorsRouting } from './decorators-routing.module';

@NgModule({
    imports: [CommonModule, DecoratorsRouting, DecoratorsPageComponent],
    exports: [],
    declarations: [],
    providers: [],
})
export class DecoratorsModule { }
