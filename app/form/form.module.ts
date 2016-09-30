import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {FormExampleComponent} from "./form-example.component";

@NgModule({
    imports: [FormsModule, BrowserModule],
    declarations: [FormExampleComponent],
    exports: [FormExampleComponent]
})
export class FormModule {

}