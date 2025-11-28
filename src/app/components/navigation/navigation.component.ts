import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
// import { AppRoutingModule } from "../app-routing.module";

@Component({
    selector: 'my-navigation',
    templateUrl: './navigation.component.html',
    styleUrls:['./navigation.component.scss'],
    imports: [RouterLink, RouterLinkActive]
})

export class MyNavigation {
}