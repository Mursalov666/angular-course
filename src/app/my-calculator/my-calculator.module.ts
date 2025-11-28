import { NgModule } from "@angular/core";
import { MyCalculatorComponent } from "./my-calculator.component";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    imports:[MyCalculatorComponent,FormsModule,BrowserModule],
    exports:[MyCalculatorComponent],
    declarations:[],
    providers:[],
})

export class MyCalculatorModule {}