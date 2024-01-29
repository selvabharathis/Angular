import {NgModule} from "@angular/core"
import {BrowserModule} from "@angular/platform-browser"
import { AppComponent } from "./app.component"
import { CardComponent } from "./card.component";
import { CarComponent } from './car/car.component'

@NgModule({
    imports : [BrowserModule],
    declarations:[AppComponent,CardComponent, CarComponent],
    bootstrap:[AppComponent]
})
export class AppModule{}