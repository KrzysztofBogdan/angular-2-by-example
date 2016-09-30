import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {HomepageComponent} from "./homepage.component";
import {EventManagerExampleComponent} from "./event-manager/event-manager-example.component";
import {FormExampleComponent} from "./form/form-example.component";
import {BananaInABoxComponentExample} from "./banana-in-a-box/banana-in-a-box-example.component";

export const appRoutes: Routes = [
    {path: "", component: HomepageComponent, data: {readable: "Homepage"}},
    {path: "event-manager", component: EventManagerExampleComponent, data: {readable: "Event Manager"}},
    {path: "form", component: FormExampleComponent, data: {readable: "Form"}},
    {path: "banana-in-a-box", component: BananaInABoxComponentExample, data: {readable: "Banana In A Box"}}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
