import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {routing} from "./examples.routing";
import {AppComponent} from "./app.component";
import {HomepageComponent} from "./homepage.component";
import {EventModule} from "./event-manager/event-manager.module";
import {FormModule} from "./form/form.module";
import {BananaInABoxModule} from "./banana-in-a-box/banana-in-a-box.module";
import {HostExampleComponent} from "./host/host-example.component";
import {HostModule} from "./host/host.module";

@NgModule({
    imports: [BrowserModule, routing, EventModule, FormModule, BananaInABoxModule, HostModule],
    declarations: [AppComponent, HomepageComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}