import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { DirectiveModule } from "./directives.module";
import { MyIfDirectiveDirective } from "./my-if-directive.directive";

@Component({
    selector: 'app-directives',
    standalone: true,
    templateUrl: './directives.component.html',
    styleUrls:['./directives.component.scss'],
    imports: [DirectiveModule, MyIfDirectiveDirective]
})

export class DirectivesPageComponent {

    //ngFor
    
    //ngIf
    public isShow = true;

    //ngSwitch

    //ngStyle
    public elementStyle: any = {
        color: 'red',
        opacity: 0.5,
    }

    //ngClass
}