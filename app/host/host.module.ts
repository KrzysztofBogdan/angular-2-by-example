import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HostExampleComponent} from "./host-example.component";
import {SimpleDirective} from "./simple.directive";
import {HostConsumerDirective} from "./host-consumer.directive";
import {SimpleComponent} from "./eg-simple.component";
import {ConsumerDirective} from "./consumer.directive";

@NgModule({
    imports: [FormsModule],
    declarations: [HostExampleComponent, HostConsumerDirective,
        ConsumerDirective, SimpleDirective, SimpleComponent],
    exports: [HostExampleComponent]
})
export class HostModule {
}