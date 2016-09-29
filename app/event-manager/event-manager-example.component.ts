import {Component} from "@angular/core";

@Component({
    selector: "eg-event-manager",
    templateUrl: "app/event-manager/event-manager-example.component.html"
})
export class EventManagerExampleComponent {
    log(any: any) {
        console.log(any);
    }
}