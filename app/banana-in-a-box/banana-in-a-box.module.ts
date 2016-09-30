import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {InOutComponent} from "./in-out.directive";
import {BananaInABoxExampleComponent} from "./banana-in-a-box-example.component";

@NgModule({
    imports: [FormsModule],
    declarations: [InOutComponent, BananaInABoxExampleComponent],
    exports: [BananaInABoxExampleComponent]
})
export class BananaInABoxModule {

}