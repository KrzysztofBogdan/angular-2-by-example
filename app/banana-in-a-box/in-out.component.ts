import {EventEmitter, Input, Output, Directive, NgZone} from "@angular/core";

@Directive({
    selector: "eg-in-out"
})
export class InOutComponent {

    @Input("inOut")
    inOut: any;

    @Output("inOutChange")
    inOutChange: EventEmitter<any> = new EventEmitter<any>();

    constructor(private zone: NgZone) {}

    @Input("emitValue")
    set emitValue(val: any) {

        console.log("Current inOut value", this.inOut);

        // setTimeout is required to avoid "Expression has changed after it was checked."
        setTimeout(() => {
            this.inOutChange.emit(val);
        });

    }
}