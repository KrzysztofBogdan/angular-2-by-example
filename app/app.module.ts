import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {routing} from "./examples.routing";
import {AppComponent} from "./app.component";
import {HomepageComponent} from "./homepage.component";
import {EventModule} from "./event-manager/event-manager.module";

@NgModule({
    imports: [BrowserModule, routing, EventModule],
    declarations: [AppComponent, HomepageComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}