import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UserService } from '../../../../user.service';
import { ViewBarComponent } from '../view-bar/view-bar.component';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';

export interface TodoItemI {
  text: string;
}
@Component({
  selector: 'app-view-foo',
  templateUrl: './view-foo.component.html',
  styleUrls: ['./view-foo.component.scss'],
  standalone: true,
  styles: ['h1 {color: green}'],
  imports: [ViewBarComponent, CommonModule, TodoItemComponent],
})
export class ViewFooComponent {
  public todoArr: TodoItemI[] = [
    {
      text: 'Foo1',
    },
    {
      text: 'Foo2',
    },
    {
      text: 'Foo3',
    },
  ];

  constructor(
    private _userService: UserService,
    private _cdr: ChangeDetectorRef
  ) {}

  public login(): void {
    this._userService.login();
    this._cdr.detectChanges();
  }

  public changeText(): void {
    this.todoArr[0] = { ...this.todoArr[0], text: 'Foo changed' };
  }

  public changeStream(): void {
    this._userService.Stringsubject$.next('two');
  }
}
