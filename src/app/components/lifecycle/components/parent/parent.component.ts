import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
  imports: [ChildComponent],
})
export class ParentComponent {
  public obj: string = 'title';

  public show = true;

  public handleEvent(value: string) {
    this.obj = value;
  }
}
