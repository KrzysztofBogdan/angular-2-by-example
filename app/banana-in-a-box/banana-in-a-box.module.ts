import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {InOutComponent} from "./in-out.component";
import {BananaInABoxComponentExample} from "./banana-in-a-box-example.component";

@NgModule({
    imports: [FormsModule],
    declarations: [InOutComponent, BananaInABoxComponentExample],
    exports: [BananaInABoxComponentExample]
})
export class BananaInABoxModule {

}