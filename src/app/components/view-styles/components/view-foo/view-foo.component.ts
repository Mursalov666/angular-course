import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../user.service';
import { ViewBarComponent } from "../view-bar/view-bar.component";
@Component({
    selector: 'app-view-foo',
    templateUrl: './view-foo.component.html',
    styleUrls: ['./view-foo.component.scss'],
    standalone: true,
    styles: [
        'h1 {color: green}'
    ],
    imports: [ViewBarComponent]
})

export class ViewFooComponent {
    
    constructor(private _userService: UserService) {}
    
    public login(): void {
        this._userService.login();
    }
}