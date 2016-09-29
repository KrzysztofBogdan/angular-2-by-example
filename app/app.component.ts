import {Component} from "@angular/core";
import {appRoutes} from "./examples.routing";
import {Routes} from "@angular/router";
@Component({
    selector: 'eg-app',
    templateUrl: "app/app.component.html"
})
export class AppComponent {
    routes: Routes = appRoutes;
}