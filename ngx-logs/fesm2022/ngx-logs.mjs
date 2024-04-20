import * as i0 from '@angular/core';
import { Injectable, Component } from '@angular/core';

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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: NgxLogsService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: NgxLogsService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: NgxLogsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });

class NgxLogsComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: NgxLogsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.5", type: NgxLogsComponent, isStandalone: true, selector: "lib-ngx-logs", ngImport: i0, template: `
    <p>
      ngx-logs works!
    </p>
  `, isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: NgxLogsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-ngx-logs', template: `
    <p>
      ngx-logs works!
    </p>
  `, standalone: true }]
        }] });

/*
 * Public API Surface of ngx-logs
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxLogsComponent, NgxLogsService };
//# sourceMappingURL=ngx-logs.mjs.map
