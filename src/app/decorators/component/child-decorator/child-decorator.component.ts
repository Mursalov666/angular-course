import { AfterContentInit, Component, ContentChildren, ElementRef, QueryList } from '@angular/core';

@Component({
    selector: 'app-child-decorator',
    templateUrl: './child-decorator.component.html',
    styleUrls:['./child-decorator.component.scss'],
    standalone: true,
})

export class ChildDecoratorComponent implements AfterContentInit {

    @ContentChildren('paragraph') paragraph!: QueryList<ElementRef<HTMLParagraphElement>>

    public ngAfterContentInit(): void {
      this.paragraph && console.log(this.paragraph);
    }
}