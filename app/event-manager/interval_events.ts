import * as ng from "@angular/core";
import {EVENT_MANAGER_PLUGINS, EventManager} from "@angular/platform-browser";


export const INTERVAL_EVENTS_PLUGIN: any = {
    provide: EVENT_MANAGER_PLUGINS,
    useClass: ng.forwardRef(() => IntervalPlugin),
    multi: true
};

@ng.Injectable()
export class IntervalPlugin {

    manager: EventManager;

    supports(eventName: string): boolean {
        return eventName === "interval";
    };

    addEventListener(element: HTMLElement, eventName: string, handler: Function): Function {

        let interval = setInterval(<(...args: any[]) => void>handler, 1000, element);

        return () => {
            // Called for de-registration
            clearInterval(interval);
        };
    }
}
