import {Component} from "@angular/core";
import {SimpleService} from "./simple.service";

@Component({
    selector: "eg-host",
    templateUrl: "app/host/host-example.component.html",
    viewProviders: [SimpleService]
})
export class HostExampleComponent {
    model: any = {};
}