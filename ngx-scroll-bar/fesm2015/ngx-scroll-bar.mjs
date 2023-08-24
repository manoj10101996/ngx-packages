import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';

class NgxScrollBarService {
    constructor() { }
}
NgxScrollBarService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxScrollBarService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
NgxScrollBarService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxScrollBarService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxScrollBarService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class NgxScrollBarComponent {
}
NgxScrollBarComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxScrollBarComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NgxScrollBarComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: NgxScrollBarComponent, selector: "lib-ngx-scroll-bar", ngImport: i0, template: `
    <p>
      ngx-scroll-bar works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxScrollBarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-ngx-scroll-bar', template: `
    <p>
      ngx-scroll-bar works!
    </p>
  ` }]
        }] });

class NgxScrollBarModule {
}
NgxScrollBarModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxScrollBarModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgxScrollBarModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: NgxScrollBarModule, declarations: [NgxScrollBarComponent], exports: [NgxScrollBarComponent] });
NgxScrollBarModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxScrollBarModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxScrollBarModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        NgxScrollBarComponent
                    ],
                    imports: [],
                    exports: [
                        NgxScrollBarComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of ngx-scroll-bar
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxScrollBarComponent, NgxScrollBarModule, NgxScrollBarService };
//# sourceMappingURL=ngx-scroll-bar.mjs.map
