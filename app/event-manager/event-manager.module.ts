import {NgModule} from "@angular/core";
import {INTERVAL_EVENTS_PLUGIN} from "./interval_events";
import {EventManagerExampleComponent} from "./event-manager-example.component";

@NgModule({
    providers: [INTERVAL_EVENTS_PLUGIN],
    declarations: [EventManagerExampleComponent],
    exports: [EventManagerExampleComponent]
})
export class EventModule {

}