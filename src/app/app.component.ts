import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyNavigation } from "./components/navigation/navigation.component";
// import { MyCalculatorComponent } from './my-calculator/my-calculator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyNavigation],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  
}
