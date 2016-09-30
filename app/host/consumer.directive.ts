import {Directive} from "@angular/core";
import {SimpleService} from "./simple.service";
import {SimpleDirective} from "./simple.directive";

@Directive({
    selector: "[eg-consumer]"
})
export class ConsumerDirective {

    constructor(service: SimpleService, directive: SimpleDirective) {

        console.log(" service.field ", service.field);
        console.log(" directive.field ", directive.field);

    }

}