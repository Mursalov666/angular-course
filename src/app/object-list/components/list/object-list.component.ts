import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'my-object-list',
  standalone: true,
  templateUrl: './object-list.component.html',
  styleUrls: ['./object-list.component.scss'],
  imports: [NgForOf],
})
export class MyObjectListComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

  public myObjects = myObjects;

  public redirectTo(id: number): void {
    this.router.navigate([`${id}`], { relativeTo: this.route });
  }
}

export const myObjects: MyObject[] = [
  {
    title: 'perviy',
    content: 'Lorem mdjfksafhsmnadnmadmndnanmdnamdmnanmdmsnfsmfsmnfm',
    id: 1,
  },
  {
    title: 'vtoroy',
    content: 'Lorem mdjfksafhsmnadnmadmndnanmdnamdmnanmdmsnfsmfsmnfm',
    id: 2,
  },
  {
    title: 'tretiy',
    content: 'Lorem mdjfksafhsmnadnmadmndnanmdnamdmnanmdmsnfsmfsmnfm',
    id: 3,
  },
  {
    title: 'chetvertiy',
    content: 'Lorem mdjfksafhsmnadnmadmndnanmdnamdmnanmdmsnfsmfsmnfm',
    id: 4,
  },
  {
    title: 'pyatiy',
    content: 'Lorem mdjfksafhsmnadnmadmndnanmdnamdmnanmdmsnfsmfsmnfm',
    id: 5,
  },
];

export interface MyObject {
  title: string;
  content: string;
  id: number;
}
