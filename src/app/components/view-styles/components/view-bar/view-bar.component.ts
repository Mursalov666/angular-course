import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-view-bar',
    templateUrl: './view-bar.component.html',
    styleUrls: ['./view-bar.component.scss'],
    standalone: true,
    imports: [CommonModule]
})

export class ViewBarComponent {
    constructor() { }
}