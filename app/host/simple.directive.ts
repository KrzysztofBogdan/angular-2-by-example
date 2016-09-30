import {Directive} from "@angular/core";

@Directive({
    selector: "eg-simple-directive"
})
export class SimpleDirective {
    field: number = 42;
}