import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { DirectiveModule } from "./directives.module";
import { MyIfDirectiveDirective } from "./my-if-directive.directive";

@Component({
    selector: 'app-directives',
    standalone: true,
    templateUrl: './directives.component.html',
    styleUrls:['./directives.component.scss'],
    imports: [NgFor, NgIf, NgSwitch, NgSwitchCase, NgStyle, DirectiveModule, MyIfDirectiveDirective]
})

export class DirectivesPageComponent {

    //ngFor
    public colors: string[] = ['red','blue','green','yellow'];
    
    //ngIf
    public isShow = true;

    //ngSwitch
    public currentColor: string = this.colors[0];

    //ngStyle
    public elementStyle: any = {
        color: 'red',
        opacity: 0.5,
    }

    //ngClass
}