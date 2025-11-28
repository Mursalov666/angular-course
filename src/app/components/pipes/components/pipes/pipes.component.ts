import { CommonModule, NgForOf, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MyCustomPipe } from "../../pipe/my-custom.pipe";

@Component({
    selector: 'app-pipes',
    templateUrl: './pipes.component.html',
    standalone: true,
    styleUrls:['./pipes.component.scss'],
    imports: [CommonModule, MyCustomPipe]
})

export class PipesComponent {

    //DatePipe
    //UpperCase
    //LowerCase
    //CurencyPipe
    //DecimalPipe
    //PercentPipe

    public name = 'Ragif';
    public surname = 'developer'

    public date = new Date().toDateString();
}