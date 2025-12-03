import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-decorators-page',
  templateUrl: './decorators-page.component.html',
  styleUrls: ['./decorators-page.component.scss'],
  standalone: true,
  imports: [NgFor],
})
export class DecoratorsPageComponent {
  public arr = [1, 2, 3, 4, 5];
}
