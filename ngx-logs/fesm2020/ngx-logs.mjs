import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';

class NgxLogsService {
    /**
     * Logs current page info with all require information's (URL, PATH etc.)
     */
    log(text) {
        console.log(this.currentTime() + ': ' + text);
    }
    /**
     * Logs Error message for custom strings as console logs
     */
    error(text) {
        console.error(this.currentTime() + ': ' + text);
    }
    /**
     * Logs Error message for custom strings as console logs
     */
    warn(text) {
        console.warn(this.currentTime() + ': ' + text);
    }
    /**
     * Same as console logs
     */
    info(text) {
        console.info(this.currentTime() + ': ' + text);
    }
    /**
     * Clears the entire console logs
     */
    clear() {
        console.clear();
    }
    /**
     * Console logs for iterations with index value - Can be used with for , forin, foreach, do..while
     */
    counter(text) {
        console.count(text);
    }
    /**
     * Logs current page info with all require information's (URL, PATH etc.)
     */
    directory() {
        console.dir(document.location);
    }
    /**
     * Displays array or JSON of array/dictionary input as a table in console
     */
    table(array) {
        console.table(array);
    }
    /**
     * Logs current page info with all require information's (URL, PATH etc.)
     */
    currentTime() {
        return ((new Date().getHours() > 12
            ? new Date().getHours() - 12
            : new Date().getHours()) +
            ':' +
            new Date().getMinutes() +
            ':' +
            new Date().getSeconds() +
            ':' +
            new Date().getMilliseconds() +
            's');
    }
}
NgxLogsService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxLogsService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
NgxLogsService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxLogsService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxLogsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });

class NgxLogsComponent {
}
NgxLogsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxLogsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NgxLogsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: NgxLogsComponent, selector: "lib-ngx-logs", ngImport: i0, template: `
    <p>
      ngx-logs works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxLogsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-ngx-logs', template: `
    <p>
      ngx-logs works!
    </p>
  ` }]
        }] });

class NgxLogsModule {
}
NgxLogsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxLogsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgxLogsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: NgxLogsModule, declarations: [NgxLogsComponent], exports: [NgxLogsComponent] });
NgxLogsModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxLogsModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxLogsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        NgxLogsComponent
                    ],
                    imports: [],
                    exports: [
                        NgxLogsComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of ngx-logs
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxLogsComponent, NgxLogsModule, NgxLogsService };
//# sourceMappingURL=ngx-logs.mjs.map
