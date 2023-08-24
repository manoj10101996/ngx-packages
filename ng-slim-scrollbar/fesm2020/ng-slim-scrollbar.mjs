import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';

class NgSlimScrollbarService {
    constructor() { }
}
NgSlimScrollbarService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgSlimScrollbarService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
NgSlimScrollbarService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgSlimScrollbarService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgSlimScrollbarService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class NgSlimScrollbarComponent {
}
NgSlimScrollbarComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgSlimScrollbarComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NgSlimScrollbarComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: NgSlimScrollbarComponent, selector: "lib-ng-slim-scrollbar", ngImport: i0, template: `
    <p>
      ng-slim-scrollbar works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgSlimScrollbarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-ng-slim-scrollbar', template: `
    <p>
      ng-slim-scrollbar works!
    </p>
  ` }]
        }] });

class NgSlimScrollbarModule {
}
NgSlimScrollbarModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgSlimScrollbarModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgSlimScrollbarModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: NgSlimScrollbarModule, declarations: [NgSlimScrollbarComponent], exports: [NgSlimScrollbarComponent] });
NgSlimScrollbarModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgSlimScrollbarModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgSlimScrollbarModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        NgSlimScrollbarComponent
                    ],
                    imports: [],
                    exports: [
                        NgSlimScrollbarComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of ng-slim-scrollbar
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgSlimScrollbarComponent, NgSlimScrollbarModule, NgSlimScrollbarService };
//# sourceMappingURL=ng-slim-scrollbar.mjs.map
