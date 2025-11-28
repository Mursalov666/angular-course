import { Component, OnInit } from '@angular/core';
import { MyObject, myObjects } from '../list/object-list.component';
import { ActivatedRoute, Params } from "@angular/router";

@Component({
    selector: 'my-object-item',
    standalone: true,
    templateUrl: './object-item.component.html',
    styleUrls: ['./object-item.component.scss']
})

export class MyObjectItemComponent implements OnInit {

    public object?: MyObject

    constructor(private route: ActivatedRoute){}

    ngOnInit(): void {
        this.route.params.subscribe((params: Params) =>{
            this.object = myObjects[params['id'] - 1]
        })
    }
}