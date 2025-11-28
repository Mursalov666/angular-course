import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'empty-page',
    templateUrl: './empty-route.component.html',
    styleUrls:['./empty-route.component.scss'],
    imports: [RouterLink]
})

export class MyEmptyPage {
}