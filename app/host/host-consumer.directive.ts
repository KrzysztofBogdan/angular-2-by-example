import {Directive, Host} from "@angular/core";
import {SimpleService} from "./simple.service";
import {SimpleDirective} from "./simple.directive";

@Directive({
    selector: "[eg-host-consumer]"
})
export class HostConsumerDirective {

    constructor(@Host() service: SimpleService, @Host() directive: SimpleDirective) {

        console.log(" service.field ", service.field);
        console.log(" directive.field ", directive.field);

    }

}